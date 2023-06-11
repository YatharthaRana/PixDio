from django.urls import path, include
from . import views

urlpatterns = [
    path('texttoimage/', views.Text2Image),
    path('supres/',views.SupResImage)
]