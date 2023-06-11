from rest_framework import serializers
from .models import *

class TextImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = TextImage
        fields = '__all__'

class UpscaleImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = UpscaleImage
        fields = '__all__'