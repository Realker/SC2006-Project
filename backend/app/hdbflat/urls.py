"""
URL mappings for the HDBFlat app.
"""
from django.urls import (
    path,
    re_path,
    include,
)

from rest_framework.routers import DefaultRouter

from hdbflat import views


router = DefaultRouter()
router.register('hdbflats', views.HDBFlatViewSet)

app_name = 'hdbflat'

urlpatterns = [
    path('', include(router.urls)),
    path('populate_from_datagovsg/', views.HDBFlatViewSet.as_view({'get': 'populate_from_datagovsg'}), name='populate_from_datagovsg'),
    path('filter_by_town/<str:town>/', views.HDBFlatViewSet.as_view({'get': 'filter_by_town'}), name='filter_by_town'),
    path('filter_using_url/<str:town>/<str:flat_type>/<int:num_results>/', views.HDBFlatViewSet.as_view({'get': 'filter_using_url'}), name='filter_using_url'),
    path('filter_using_query/', views.HDBFlatViewSet.as_view({'get': 'filter_using_query'}), name='filter_using_query'),
    path('filter_using_post/', views.HDBFlatViewSet.filter_using_post, name='filter_using_post'),
]
