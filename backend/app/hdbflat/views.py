"""
Views for the HDBFlat APIs
"""
import requests

#from fuzzywuzzy import fuzz

from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import api_view

from django.http import JsonResponse
from django.db.models import Q
from core.models import HDBFlat
from hdbflat import serializers
from .serializers import HDBFlatSerializer


class HDBFlatViewSet(viewsets.ModelViewSet):
    """View for manage hdbflat APIs."""
    serializer_class = serializers.HDBFlatSerializer
    queryset = HDBFlat.objects.all()
    authetication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """Retrieve hdbflats for authenticated user."""
        return self.queryset.filter(user=self.request.user).order_by('-id')

    def get_serializer_class(self):
        """Return the serializer class for request."""
        if self.action == 'list':
            return serializers.HDBFlatSerializer

        return self.serializer_class

    def perform_create(self, serializer):
        """Create a new HDBFlat."""
        serializer.save(user=self.request.user)

    def populate_from_datagovsg(self, request):
        """Populate Django PostgreSQL Database with information from data.gov.sg"""
        url = "https://data.gov.sg/api/action/datastore_search"
        resource_id = "f1765b54-a209-4718-8d38-a39237f502b3"
        limit = 100  # Number of records retrieved per request
        offset = 0
        more_records = True

        while more_records:
            # Send request to API
            params = {"resource_id": resource_id, "limit": limit, "offset": offset}
            response = requests.get(url, params=params)
            data = response.json()["result"]

            # Check if there are more records to retrieve
            if offset + limit >= data["total"]:
                more_records = False

            # Process records and create HDBFlat objects
            for record in data["records"]:
                # Parse record and create HDBFlat object
                flat = HDBFlat(
                    user=self.request.user,
                    town=record["town"],
                    flat_type=record["flat_type"],
                    flat_model=record["flat_model"],
                    floor_area_sqm=record["floor_area_sqm"],
                    street_name=record["street_name"],
                    resale_price=record["resale_price"],
                    month=record["month"],
                    remaining_lease=record["remaining_lease"],
                    lease_commence_date=record["lease_commence_date"],
                    storey_range=record["storey_range"],
                    id_str=str(record["_id"]),
                    block=record["block"],
                    link="https://data.gov.sg/dataset/resale-flat-prices"
                )
                flat.save()

            # Update offset for next request
            offset += limit

    def filter_by_town(self, request, town):
        """Filter HDBFlats by town and return the latest 10 results."""
        queryset = self.get_queryset().filter(town=town).order_by('-id')[:10]
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def filter_using_url(self, request, town=None, flat_type=None, num_results=10):
        """Filter HDBFlats by passing parameters in a fixed format via URL."""
        queryset = self.get_queryset()
        if town:
            queryset = self.get_queryset().filter(town=town)
        if flat_type:
            queryset = queryset.filter(flat_type=flat_type)
        queryset = queryset.order_by('-id')[:num_results]
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def filter_using_query(self, request):
        """Filter HDBFlats by passing parameters in a non-fixed query format via URL."""
        queryset = self.get_queryset()
        list_size = 10
        town = request.query_params.get('town', None)
        flat_type = request.query_params.get('flat_type', None)
        num_results = request.query_params.get('num_results', None)

        if num_results:
            num_results = int(num_results)
            list_size = num_results
        if town:
            queryset = queryset.filter(town=town)
        if flat_type:
            queryset = queryset.filter(flat_type=flat_type)

        queryset = queryset.order_by('-id')[:list_size]
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    @api_view(['POST'])
    def filter_using_post(request):
        """Filter HDBFlats by passing parameters in a JSON format via POST."""
        default_filter = '-id'
        default_list = 3

        # EXAMPLE OF JSON REQUEST
        # {
        #     "town": "ANG MO KIO",
        #     "flat_type": "4 ROOM",
        #     "filter_param": "block",
        #     "list_size": 10
        # }

        town = request.data.get('town')
        flat_type = request.data.get('flat_type')
        flat_model = request.data.get('flat_model')
        floor_area_sqm = request.data.get('floor_area_sqm')
        street_name = request.data.get('street_name')
        resale_price = request.data.get('resale_price')
        month = request.data.get('month')
        remaining_lease = request.data.get('remaining_lease')
        lease_commence_date = request.data.get('lease_commence_date')
        storey_range = request.data.get('storey_range')
        block = request.data.get('block')
        filter_param = request.data.get('filter_param')
        list_size = request.data.get('list_size')

        if filter_param:
            default_filter = filter_param

        if list_size:
            default_list = list_size

        queryset = HDBFlat.objects.all()
        if town:
            queryset = queryset.filter(town=town)
        if flat_type:
            queryset = queryset.filter(flat_type=flat_type)
        if flat_model:
            queryset = queryset.filter(flat_model=flat_model)
        if floor_area_sqm:
            queryset = queryset.filter(floor_area_sqm=floor_area_sqm)
        if street_name:
            queryset = queryset.filter(street_name=street_name)
        if resale_price:
            queryset = queryset.filter(resale_price=resale_price)
        if month:
            queryset = queryset.filter(month=month)
        if remaining_lease:
            queryset = queryset.filter(remaining_lease=remaining_lease)
        if lease_commence_date:
            queryset = queryset.filter(lease_commence_date=lease_commence_date)
        if storey_range:
            queryset = queryset.filter(storey_range=storey_range)
        if block:
            queryset = queryset.filter(block=block)

        queryset = queryset.order_by(default_filter)[:default_list]
        serializer = HDBFlatSerializer(queryset, many=True)
        return Response(serializer.data)
