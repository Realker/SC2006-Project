"""
Database models.
"""
from django.conf import settings
from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)


class UserManager(BaseUserManager):
    """Manager for users."""

    def create_user(self, email, password=None, **extra_fields):
        """Create, save and return a new user."""
        if not email:
            raise ValueError('User must have an email address.')
        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password):
        """Create and return a new superuser"""
        user = self.create_user(email, password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)

        return user


class User(AbstractBaseUser, PermissionsMixin):
    """User in the system."""
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'


class HDBFlat(models.Model):
    """HDBFlat object."""
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    town = models.CharField(max_length=255)
    flat_type = models.CharField(max_length=255)
    flat_model = models.CharField(max_length=255)
    floor_area_sqm = models.DecimalField(max_digits=15, decimal_places=0)
    street_name = models.CharField(max_length=255)
    resale_price = models.DecimalField(max_digits=15, decimal_places=0)
    month = models.CharField(max_length=255)
    remaining_lease = models.CharField(max_length=255)
    lease_commence_date = models.CharField(max_length=255)
    storey_range = models.CharField(max_length=255)
    id_str = models.CharField(max_length=255)
    block = models.CharField(max_length=255)
    link = models.CharField(max_length=255)

    def __str__(self):
        return self.id_str


class FavouritesHDB(models.Model):
    """FavouritesHDB object."""
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    email = models.CharField(max_length=255)
    id_str_hdb = models.CharField(max_length=255)

    def __str__(self):
        return self.id_str_hdb + " - " + self.email
