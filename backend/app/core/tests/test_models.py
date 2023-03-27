"""
Tests for models.
"""
from decimal import Decimal

from django.test import TestCase
from django.contrib.auth import get_user_model

from core import models


class ModelTests(TestCase):
    """Test models."""

    def test_create_user_with_email_successful(self):
        """Test creating a user with an email is successful."""
        email = 'test@example.com'
        password = 'testpass123'
        user = get_user_model().objects.create_user(
            email=email,
            password=password
        )

        self.assertEqual(user.email, email)
        self.assertTrue(user.check_password(password))

    def test_new_user_email_normalized(self):
        """Test email is normalized for new users."""
        sample_emails = [
            ['test1@EXAMPLE.com', 'test1@example.com'],
            ['Test2@Example.com', 'Test2@example.com'],
            ['TEST3@EXAMPLE.com', 'TEST3@example.com'],
            ['test4@example.com', 'test4@example.com'],
        ]
        for email, expected in sample_emails:
            user = get_user_model().objects.create_user(email, 'sample123')
            self.assertEqual(user.email, expected)

    def test_new_user_without_email_raises_error(self):
        """Test that creating a user without an email raises a ValueError."""
        with self.assertRaises(ValueError):
            get_user_model().objects.create_user('', 'test123')

    def test_create_superuser(self):
        """Test creating a superuser."""
        user = get_user_model().objects.create_superuser(
            'test@example.com',
            'test123',
        )

        self.assertTrue(user.is_superuser)
        self.assertTrue(user.is_staff)

    def test_create_hdbflat(self):
        """Test creating a HDBFlat is successful."""
        user = get_user_model().objects.create_user(
            'test@example.com',
            'testpass123',
        )
        hdbflat = models.HDBFlat.objects.create(
            user=user,
            town="ANG MO KIO",
            flat_type="2 ROOM",
            flat_model="Improved",
            floor_area_sqm=Decimal('44'),
            street_name="ANG MO KIO AVE 10",
            resale_price=Decimal('232000'),
            month="2017-01",
            remaining_lease="61 years 04 months",
            lease_commence_date="1979",
            storey_range="10 TO 12",
            id_str="1",
            block="406"
        )

        self.assertEqual(str(hdbflat), hdbflat.id_num)
