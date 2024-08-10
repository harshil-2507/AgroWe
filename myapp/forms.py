from django import forms
from .models import FormData

class FormDataForm(forms.ModelForm):
    class Meta:
        model = FormData
        fields = ['Crop', 'Rainfall', 'Climate', 'Soil_Type', 'O2_Level', 'Calcium', 'Potassium', 'Phosphorous', 'Nitrogen', 'Magnesium' , 'Iron']
