from django.urls import path
from . import views

urlpatterns = [
    path('', views.inicio, name='inicio'),
    path('paises/', views.get_pais, name='get_pais'),
    path('ciudades/<int:pais_id>/', views.get_ciudad, name='get_ciudad'),
]