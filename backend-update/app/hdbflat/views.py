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

from django.db.models import Q
from core.models import HDBFlat
from hdbflat import serializers
from .serializers import HDBFlatSerializer
from django.http import JsonResponse, HttpResponseBadRequest
import os


class HDBFlatViewSet(viewsets.ModelViewSet):
    """View for manage hdbflat APIs."""
    serializer_class = serializers.HDBFlatSerializer
    queryset = HDBFlat.objects.all()
    authentication_classes = [TokenAuthentication]
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

    @api_view(['POST'])
    def filter_using_post(request):
        """Filter HDBFlats by passing parameters in a JSON format via POST."""
        default_filter = '-id'
        default_list = 3
        default_page_num = 1

        # EXAMPLE OF JSON REQUEST
        # {
        #     "town": "JURONG EAST",
        #     "flat_type": "5 ROOM",
        #     "flat_model": "Improved",
        #     "block": "103",
        #     "filter_param": "-month",
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
        id_str = request.data.get('id_str')
        block = request.data.get('block')
        filter_param = request.data.get('filter_param')
        list_size = request.data.get('list_size')
        page_num = request.data.get('page_num')
        min_resale_price = request.data.get('min_resale_price')
        max_resale_price = request.data.get('max_resale_price')
        min_sqm = request.data.get('min_sqm')
        max_sqm = request.data.get('max_sqm')

        if filter_param:
            default_filter = filter_param

        if list_size:
            default_list = int(list_size)

        if page_num:
            default_page_num = int(page_num)

        queryset = HDBFlat.objects.all()
        if town:
            queryset = queryset.filter(town=town)
        if flat_type:
            queryset = queryset.filter(flat_type=flat_type)
        if flat_model:
            queryset = queryset.filter(flat_model=flat_model)
        if floor_area_sqm:
            queryset = queryset.filter(floor_area_sqm=floor_area_sqm)
        if min_sqm and max_sqm:
            queryset = queryset.filter(floor_area_sqm__range=(min_sqm, max_sqm))
        elif min_sqm:
            queryset = queryset.filter(floor_area_sqm__gte=min_sqm)
        elif max_sqm:
            queryset = queryset.filter(floor_area_sqm__lte=max_sqm)
        if street_name:
            queryset = queryset.filter(street_name=street_name)
        if resale_price:
            queryset = queryset.filter(resale_price=resale_price)
        if resale_price:
            queryset = queryset.filter(resale_price=resale_price)
        if min_resale_price and max_resale_price:
            queryset = queryset.filter(resale_price__range=(min_resale_price, max_resale_price))
        elif min_resale_price:
            queryset = queryset.filter(resale_price__gte=min_resale_price)
        elif max_resale_price:
            queryset = queryset.filter(resale_price__lte=max_resale_price)
        if month:
            queryset = queryset.filter(month=month)
        if remaining_lease:
            queryset = queryset.filter(remaining_lease=remaining_lease)
        if lease_commence_date:
            queryset = queryset.filter(lease_commence_date=lease_commence_date)
        if storey_range:
            queryset = queryset.filter(storey_range=storey_range)
        if id_str:
            queryset = queryset.filter(id_str=id_str)
        if block:
            queryset = queryset.filter(block=block)

        #total_count = queryset.count()

        queryset = queryset.order_by(default_filter)[default_list*(default_page_num-1):default_list*default_page_num]
        serializer = HDBFlatSerializer(queryset, many=True)
        return Response(serializer.data)

    @api_view(['GET'])
    def get_street_view(request, block, street_name):
        """Uses Google Map API to retrieve a static street view of the address input. Key is hidden in a text file.."""
        with open('google_maps_api_key.txt', 'r') as f:
            api_key = f.read().strip()
        url = f"https://maps.googleapis.com/maps/api/streetview?size=640x480&location={block},%20{street_name},%20Singapore&pitch=30&key={api_key}"
        response = requests.get(url)
        return JsonResponse({'streetViewUrl': response.url})

    @api_view(['GET'])
    def get_nearby_facilities(request, block, street_name, facility, radius):
        """Uses Google Map API to retrieve a list of nearby facilities based on the address input. Key is hidden in a text file.."""
        #Facility can be either: school, bus station, subway_station
        #Radius uses metres as units
        with open('google_maps_api_key.txt', 'r') as f:
            api_key = f.read().strip()
        #Generate longitude and latitude
        url = f'https://maps.googleapis.com/maps/api/geocode/json?address={block},%20{street_name},%20Singapore&key={api_key}'
        #https://maps.googleapis.com/maps/api/geocode/json?address=517D%20JURONG%20WEST%20STREET%2052,%20Singapore&key=AIzaSyCaBudK_HGitbDwzH2VahhyFeQnazhpEFU
        response = requests.get(url).json()
        location = response['results'][0]['geometry']['location']
        latitude = location['lat']
        longitude = location['lng']
        #Use coordiantes to find nearby facilities
        url = f'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location={latitude},{longitude}&radius={radius}&type={facility}&key={api_key}'
        response = requests.get(url).json()
        # Extract relevant information from the response
        facilities = []
        for result in response['results']:
            facilities.append({
                'name': result['name'],
                'address': result['vicinity'],
                'location': result['geometry']['location']
            })

        # Return the list of nearby schools
        return JsonResponse({'facilities': facilities})

    @api_view(['GET'])
    def get_static_map_view(request, block, street_name):
        """Uses Google Map API to retrieve a static map view of the address input. Key is hidden in a text file.."""
        #Facility can be either: school, bus station, subway_station
        #Radius uses metres as units
        with open('google_maps_api_key.txt', 'r') as f:
            api_key = f.read().strip()
        #Generate longitude and latitude
        url = f'https://maps.googleapis.com/maps/api/geocode/json?address={block},%20{street_name},%20Singapore&key={api_key}'
        #https://maps.googleapis.com/maps/api/geocode/json?address=517D%20JURONG%20WEST%20STREET%2052,%20Singapore&key=AIzaSyCaBudK_HGitbDwzH2VahhyFeQnazhpEFU
        response = requests.get(url).json()
        location = response['results'][0]['geometry']['location']
        latitude = location['lat']
        longitude = location['lng']
        #Use coordiantes to find nearby facilities
        url = f'https://maps.googleapis.com/maps/api/staticmap?center={latitude},{longitude}&zoom=13&size=600x300&maptype=roadmap&key={api_key}&markers=color:red%7Clabel:O%7C{latitude},{longitude}'
        response = requests.get(url)
        return JsonResponse({'mapViewUrl': response.url})

