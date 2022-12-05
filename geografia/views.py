from django.shortcuts import render
from .models import pais, ciudad
from django.http import JsonResponse


def inicio(request):
    return render(request, 'index.html')

def get_pais(request):
    paises = list(pais.objects.values())
    if (len(paises) > 0):
        data={'message':'Success','paises':paises}
    else:
        data={'message':'Not found'}
    return JsonResponse(data)

def get_ciudad(request, pais_id):
    ciudades = list(ciudad.objects.filter(pais_id=pais_id).values()) 
    if (len(ciudades) > 0):
        data={'message':'Success','ciudades':ciudades}
    else:
        data={'mesage':'Not found'}
    return JsonResponse(data)