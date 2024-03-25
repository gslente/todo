from rest_framework import serializers
from rest_framework.parsers import JSONParser

# INTERNAL
from todo.models import Todo

# Create your serializers here.
class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = '__all__'