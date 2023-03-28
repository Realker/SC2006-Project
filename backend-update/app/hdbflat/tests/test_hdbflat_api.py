"""
Tests for HDBFlat APIs.
"""
from decimal import Decimal

from django.contrib.auth import get_user_model
from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_freamework.test import APIClient

from core.models import HDBFlat

from hdbflat.serializers import HDBFlatSerializer


HDBFLAT_URL = reverse('hdbflat:hdbflat-list')


def create_HDBFlat(**params):
    """Create and return a sample HDBFlat."""
    defaults = {
        'town': "ANG MO KIO",
        'flat_type': "2 ROOM",
        'flat_model': "Improved",
        'floor_area_sqm': "44",
        'street_name': "ANG MO KIO AVE 10",
        'resale_price': "232000",
        'month': "2017-01",
        'remaining_lease': "61 years 04 months",
        'lease_commence_date': "1979",
        'storey_range': "10 TO 12",
        'id_str': "1",
        'block': "406",
        'link': "http://example.com/hdbflat.pdf"
    }
    defaults.update(params)

    hdbflat = HDBFlat.objects.create(**defaults)
    return hdbflat


class PublicHDBFlatAPITests(TestCase):
    """Test unauthenticated API requests."""

    def setUp(self):
        self.client = APIClient()

    def test_auth_required(self):
        """Test auth is required to call API."""
        res = self.client.get(HDBFLAT_URL)

        self.assertEqual(res.status_code, status.HTTP_401_UNAUTHORIZED)


class PrivateHDBFlatAPITests(TestCase):
    """Test authenticated API requests."""

    def setUp(self):
        self.client = APIClient()
        self.user = get_user_model().objects.create_user(
            'user@example.com',
            'testpass123',
        )
        self.client.force_authenticate(self.user)

    def test_retrive_hdbflats(self):
        """Test retriving a list of hdbflats."""
        create_hdbflat(user=self.user)
        create_hdbflat(user=self.user)

        res = self.client.get(HDBFLAT_URL)

        hdbflat = HDBFlat.objects.all().order_by('-id')
        serializer = HDBFlatSerializer(hdbflat, many=True)
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(res.data, serializer.data)

    def test_hdbflat_list_limited_to(self):
        """Test list of hdbflats is limtied to authenticated user."""
        other_user = get_user_model().objects.create_user(
            'other@example.com',
            'password123',
        )
        create_hdbflat(user=other_user)
        create_hdbflat(user=self.user)

        res = self.client.get(HDBFLAT_URL)

        hdbflat = HDBFlat.objects.filter(user=self.user)
        serializer = HDBFlatSerializer(hdbflat, many=True)
        self.assertEqual(res.status_code, status.HTTP_200_OK)
        self.assertEqual(res.data, serializer.data)
