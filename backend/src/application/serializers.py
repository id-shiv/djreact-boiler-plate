from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Notifications

class NotificationsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Notifications
        fields = ['message', 'category']