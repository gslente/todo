from django.db import models

class AbstractModelBase(models.Model):
    id = models.BigAutoField( primary_key=True )
    title = models.CharField( max_length=50, blank=False )
    created_at = models.DateTimeField( auto_now_add=True )
    updated_at = models.DateTimeField( auto_now=True )
    published = models.BooleanField( default=False )
  
    def __str__(self):
        return self.title

    class Meta: 
        abstract = True