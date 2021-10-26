from django.urls import path
from .views import CadastrarDiaristas, listar_diaristas, editar_diarista, remover_diarista

urlpatterns = [
    path('cadastrar_diarista', CadastrarDiaristas, name='cadastrar_diarista'),
    path('listar_diaristas', listar_diaristas, name='listar_diaristas'),
    path('editar_diarista/<int:id_diarista>', editar_diarista, name ='editar_diarista'),
    path('remover_diarista/<int:id_diarista>', remover_diarista, name ='remover_diarista'),
]