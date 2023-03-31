"""
Serializers for HDBFlat API
"""
from rest_framework import serializers

from core.models import FavouritesHDB


class FavouritesHDBSerializer(serializers.ModelSerializer):
    """Serializer for favouritehdbs."""
    #id = serializers.IntegerField()

    class Meta:
        model = FavouritesHDB
        fields = ['id', 'id_str_hdb', 'email']
        read_only_fields = ['id']


class FavouritesHDBDetailSerializer(FavouritesHDBSerializer):
    """Serializer for favouritehdbs detail view."""

    class Meta(FavouritesHDBSerializer.Meta):
        fields = FavouritesHDBSerializer.Meta.fields + ['description']
