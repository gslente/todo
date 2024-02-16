from rest_framework import serializers
from . import models

# Create your serializers here.
class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Todo
        fields = '__all__'