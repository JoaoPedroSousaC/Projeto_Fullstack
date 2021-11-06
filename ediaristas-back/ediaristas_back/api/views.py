from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
# Create your views here.
from api.services.cidade_atendimento_service import listar_diaristas_cidade
from .serializer import diaristas_cidade_serializer
from .pagination import diaristas_cidade_pagination
class DiaristaCidadeList(APIView, diaristas_cidade_pagination.DiaristaCidadePagination):
    def get(self, request, format = None):
        cep = self.request.query_params.get('cep', None)
        diarista = listar_diaristas_cidade(cep)
        resultado = self.paginate_queryset(diarista, request)
        serializer = diaristas_cidade_serializer.DiaristaCidadeSerializer(resultado, many=True, context={'request': request})
        return self.get_paginated_response(serializer.data)

