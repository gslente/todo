from django.db import models
from backend.models import AbstractModelBase

# Create your models here.
class Todo(AbstractModelBase):
    is_complete = models.BooleanField( default=False )
    body = models.CharField( max_length=250, blank=True )