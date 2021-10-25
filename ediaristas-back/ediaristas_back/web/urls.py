from django.urls import path
from .views import CadastrarDiaristas, listar_diaristas

urlpatterns = {
    path('cadastrar_diarista', CadastrarDiaristas, name='cadastrar_diarista'),
    path('listar_diaristas', listar_diaristas, name='listar_diaristas'),
}