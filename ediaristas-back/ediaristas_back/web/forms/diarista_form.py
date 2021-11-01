import json

from django import forms
from ..models import Diarista
from ..services import cep_services


class DiaristaForm(forms.ModelForm):
    cpf = forms.CharField(widget=forms.TimeInput(attrs={'data-mask': "000.000.000-00"}))
    cep = forms.CharField(widget=forms.TimeInput(attrs={'data-mask': "00000-000"}))
    telefone = forms.CharField(widget=forms.TimeInput(attrs={'data-mask': "(00) 00000-0000"}))

    class Meta:
        model = Diarista
        exclude = ('codigo_ibge',)
    def clean_cpf(self):
        cpf = self.cleaned_data['cpf']
        return cpf.replace(".","").replace("-","")
    def clean_cep(self):
        cep = self.cleaned_data['cep']
        cep_formatado = cep.replace("-", "")
        response = cep_services.buscar_cidade_cep(cep_formatado)
        if response.status_code == 400:
            raise forms.ValidationError("Cep Inválido")
        cidade_api = json.loads(response.content)
        if "erro" in cidade_api:
            raise forms.ValidationError("Cep Inválido")

        return cep.replace("-", "")



    def clean_telefone(self):
        telefone = self.cleaned_data['telefone']
        return telefone.replace("(","").replace(")","").replace(" ","").replace("-","")

    def save(self, commit=True):
        instance  = super(DiaristaForm, self).save(commit=False)
        response = cep_services.buscar_cidade_cep(self.cleaned_data.get('cep'))
        cidade_api = json.loads(response.content)
        instance.codigo_ibge = cidade_api['ibge']
        instance.save()
        return instance