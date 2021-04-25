from rest_framework import viewsets

from .models import Notifications
from .serializers import NotificationsSerializer

class NotificationsViewSet(viewsets.ModelViewSet):
    queryset = Notifications.objects.all()
    serializer_class = NotificationsSerializer
