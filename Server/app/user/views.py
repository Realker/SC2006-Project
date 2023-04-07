"""
Views for the user API.
"""
from rest_framework import generics, authentication, permissions
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.settings import api_settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.contrib.auth.views import PasswordResetView

from user.serializers import (
    UserSerializer,
    AuthTokenSerializer,
    PasswordResetSerializer,
)


class CreateUserView(generics.CreateAPIView):
    """Register(Create) a new user in the system."""
    serializer_class = UserSerializer


class CreateTokenView(ObtainAuthToken):
    """Create a new auth token for user"""
    serializer_class = AuthTokenSerializer
    renderer_classes = api_settings.DEFAULT_RENDERER_CLASSES


class ManageUserView(generics.RetrieveUpdateAPIView):
    """Manage the authenticated user."""
    serializer_class = UserSerializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        """Retrieve and return authentication user"""
        return self.request.user

@method_decorator(csrf_exempt, name='dispatch')
class PasswordResetAPIView(APIView):
    serializer_class = PasswordResetSerializer

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
