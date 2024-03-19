from .models import CustomUser  # Import your CustomUser model
from rest_framework import viewsets
from .serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()  # Use CustomUser for the queryset
    serializer_class = UserSerializer
