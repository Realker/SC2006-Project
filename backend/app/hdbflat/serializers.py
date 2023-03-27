"""
Serializers for HDBFlat API
"""
from rest_framework import serializers

from core.models import HDBFlat


class HDBFlatSerializer(serializers.ModelSerializer):
    """Serializer for hdbflats."""

    class Meta:
        model = HDBFlat
        fields = ['town', 'flat_type', 'flat_model', 'floor_area_sqm', 'street_name', 'resale_price', 'month', 'remaining_lease', 'lease_commence_date', 'storey_range', 'id_str', 'block', 'link']
        read_only_fields = ['id']


class HDBFlatDetailSerializer(HDBFlatSerializer):
    """Serializer for hdbflats detail view."""

    class Meta(HDBFlatSerializer.Meta):
        fields = HDBFlatSerializer.Meta.fields + ['description']
