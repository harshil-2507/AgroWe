from django import forms
from .models import FormData

class FormDataForm(forms.ModelForm):
    class Meta:
        model = FormData
        fields = ['Crop', 'Rainfall', 'Temp', 'Soil_Type', 'O2_Level', 'Calcium', 'Potassium', 'Phosphorous', 'Nitrogen', 'Magnesium', 'Iron']
