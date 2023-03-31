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
from core.models import FavouritesHDB
from favouriteshdb import serializers


class FavouritesHDBViewSet(viewsets.ModelViewSet):
    """View for manage hdbflat APIs."""
    serializer_class = serializers.FavouritesHDBSerializer
    queryset = FavouritesHDB.objects.all()
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """Retrieve favouritehdb for authenticated user."""
        return self.queryset.filter(user=self.request.user).order_by('-id')

    def get_serializer_class(self):
        """Return the serializer class for request."""
        if self.action == 'list':
            return serializers.FavouritesHDBSerializer

        return self.serializer_class

    def perform_create(self, serializer):
        """Create a new FavouriteHDB."""
        serializer.save(user=self.request.user)
