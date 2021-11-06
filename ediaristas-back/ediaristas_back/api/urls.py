from django.urls import path
from .views import DiaristaCidadeList

urlpatterns = [
    path('diaristas-cidade', DiaristaCidadeList.as_view(), name='diaristas-cidade-list'),

]