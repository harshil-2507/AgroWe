from django import forms
from .models import FormData

OPTIONS = [
    ('option1', 'Option 1'),
    ('option2', 'Option 2'),
    ('option3', 'Option 3'),
    ('option4', 'Option 4'),
    ('option5', 'Option 5'),
    ('option6', 'Option 6'),
    ('option7', 'Option 7'),
]

class FormDataForm(forms.ModelForm):
    Crop = forms.ChoiceField(choices=OPTIONS)
    Rainfall = forms.ChoiceField(choices=OPTIONS)
    Temp = forms.ChoiceField(choices=OPTIONS)
    Soil_Type = forms.ChoiceField(choices=OPTIONS)
    O2_Level = forms.ChoiceField(choices=OPTIONS)
    Calcium = forms.ChoiceField(choices=OPTIONS)
    potassium = forms.ChoiceField(choices=OPTIONS)
    Phosphorous = forms.ChoiceField(choices=OPTIONS)
    Nitrogen = forms.ChoiceField(choices=OPTIONS)
    Magnesium = forms.ChoiceField(choices=OPTIONS)
    Iron = forms.ChoiceField(choices=OPTIONS)

    class Meta:
        model = FormData
        fields = '__all__'
