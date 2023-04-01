"""
Views for the app.
"""
from rest_framework import generics, authentication, permissions
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.settings import api_settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.views import PasswordResetView
from django.shortcuts import redirect

from user.serializers import (
    UserSerializer,
    AuthTokenSerializer,
)


class PasswordResetAPIView(APIView):
    def post(self, request):
        email = request.data.get('email')
        if email:
            try:
                PasswordResetView.as_view()(request=request)
                return Response({'success': 'Password reset email has been sent.'}, status=status.HTTP_200_OK)
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'error': 'Email is required.'}, status=status.HTTP_400_BAD_REQUEST)


def redirect_to_another_site(request):
    return redirect('http://localhost:3001/')