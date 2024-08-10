from django.contrib import admin
from .models import FormData

class FormDataAdmin(admin.ModelAdmin):
    list_display = (
        'user',
        'Crop',
        'Rainfall',
        'Temp',
        'Soil_Type',
        'O2_Level',
        'Calcium',
        'Potassium',
        'Phosphorous',
        'Nitrogen',
        'Magnesium',
        'Iron',
    )

admin.site.register(FormData, FormDataAdmin)
