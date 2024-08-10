from django.contrib import admin
from .models import FormData

@admin.register(FormData)
class FormDataAdmin(admin.ModelAdmin):
    list_display = (
        'Crop', 'Rainfall', 'Temp', 'Soil_Type', 'O2_Level',
        'Calcium', 'potassium', 'Phosphorous', 'Nitrogen', 'Magnesium', 'Iron'
    )  # Fields to display in the list view
