"""
URL mappings for the HDBFlat app.
"""
from django.urls import (
    path,
    re_path,
    include,
)

from rest_framework.routers import DefaultRouter

from favouriteshdb import views


router = DefaultRouter()
router.register('favouriteshdb', views.FavouritesHDBViewSet)

app_name = 'favouriteshdb'

urlpatterns = [
    path('', include(router.urls)),
]
