from django.contrib import admin
from . import models

# Register your models here.
class TodoAdmin(admin.ModelAdmin):
    pass

# Register your models to Admin here.
admin.site.register(models.Todo, TodoAdmin)