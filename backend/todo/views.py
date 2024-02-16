from django.shortcuts import render
from rest_framework import viewsets
from . import serializers, models

# Create your views here.
class TodoViewset(viewsets.ModelViewSet):
    queryset = models.Todo.objects.all()
    serializer_class = serializers.TodoSerializer