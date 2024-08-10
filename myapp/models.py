from django.db import models
from django.contrib.auth.models import User
import random

class FormData(models.Model):
    # user = models.ForeignKey(User, on_delete=models.CASCADE)  # Corrected field name
    Crop = models.FloatField(max_length=100,null=True)
    Rainfall = models.FloatField(max_length=100,null = True)
    Climate = models.FloatField(max_length=100,null = True)
    Soil_Type = models.FloatField(max_length=100,null = True)
    O2_Level = models.FloatField(max_length=100,null = True)
    Calcium = models.FloatField(max_length=100,null = True)
    Potassium = models.FloatField(max_length=100,null = True)  # Corrected case
    Phosphorous = models.FloatField(max_length=100,null = True)
    Nitrogen = models.FloatField(max_length=100,null = True)
    Magnesium = models.FloatField(max_length=100,null = True)
    Iron = models.FloatField(max_length=100,null = True)

class IdealValues():
    Crop = models.FloatField(default=100)
    Rainfall = models.FloatField(default=100)
    Climate = models.FloatField(default=100)
    Soil_Type = models.FloatField(default=100)
    O2_Level = models.FloatField(default=100)
    Calcium = models.FloatField(default=100)
    Potassium = models.FloatField(default=100)
    Phosphorous = models.FloatField(default=100)
    Nitrogen = models.FloatField(default=100)
    Magnesium = models.FloatField(default=100)
    Iron = models.FloatField(default=100)

    def __str__(self):
        return f"IdealValues {self.id}"
