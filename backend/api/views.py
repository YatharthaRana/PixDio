from __future__ import absolute_import

from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializers import *

from . import TxtImg
from . import enhanceimg
from .RealESRGAN import Upscale as ups
# import RealESRGAN.inference_realesrgan as supres


import warnings
warnings.filterwarnings('ignore')


# Create your views here.

@api_view(['GET','POST'])
def Text2Image(request):
    if request.method == 'GET':
        desc = TextImage.objects.all()
        serializer = TextImageSerializer(desc, many=True)
        return Response(serializer.data)
    
    elif request.method == 'POST':
        description = request.data['description']
        print (description)
        url = TxtImg.textinput(description)
        print(url)
        data={}
        data.update({"description":description})
        data.update({"url":url})
        serializer = TextImageSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

#For super resolution
@api_view(['GET','POST'])
def SupResImage(request):
    if request.method == 'GET':
        inp = UpscaleImage.objects.all()
        serializer = UpscaleImageSerializer(inp, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        data={}
        print(request.data['inp'].name)
        
        data.update({"inp":request.data['inp']})
        print("before")
        ups.upres(request.data['inp'].name)
        print("after")
        serializer = UpscaleImageSerializer(data = data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else: 
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)