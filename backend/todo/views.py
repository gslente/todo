from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response

# INTERNAL
from todo.models import Todo
from todo.serializers import TodoSerializer

# Create your views here.
class TodoViewset(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer