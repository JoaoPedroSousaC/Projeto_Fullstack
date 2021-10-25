from django.http import HttpResponseRedirect
from django.shortcuts import render, redirect
from .forms import diarista_form

# Create your views here.
from .models import Diarista


def CadastrarDiaristas(request):
    if request.method == "POST":

        form_diarista = diarista_form.DiaristaForm(request.POST, request.FILES)
        if form_diarista.is_valid():
            form_diarista.save()
            return HttpResponseRedirect('listar_diaristas')
    else:
        form_diarista = diarista_form.DiaristaForm()
    return render(request, 'forms_diarista.html', {'form_diarista': form_diarista})




def listar_diaristas(request):
    diarista = Diarista.objects.all()
    return render(request, 'lista_diaristas.html',{'diaristas': diarista})