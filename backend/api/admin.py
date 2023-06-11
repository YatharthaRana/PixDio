from django.contrib import admin
from .models import *
# Register your models here.

@admin.register(TextImage)
class TextImageAdmin(admin.ModelAdmin):
    list_display=['id','description','url']

@admin.register(UpscaleImage)
class UpscaleImageAdmin(admin.ModelAdmin):
    list_display = ['id','inp']