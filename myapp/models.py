from django.db import models
from django.contrib.auth.models import User
import random

class FormData(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # Corrected field name
    Crop = models.CharField(max_length=100)
    Rainfall = models.CharField(max_length=100)
    Temp = models.CharField(max_length=100)
    Soil_Type = models.CharField(max_length=100)
    O2_Level = models.CharField(max_length=100)
    Calcium = models.CharField(max_length=100)
    Potassium = models.CharField(max_length=100)  # Corrected case
    Phosphorous = models.CharField(max_length=100)
    Nitrogen = models.CharField(max_length=100)
    Magnesium = models.CharField(max_length=100)
    Iron = models.CharField(max_length=100)

class IdealValues(models.Model):
    Crop = models.FloatField(default=100)
    Rainfall = models.FloatField(default=100)
    Temp = models.FloatField(default=100)
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
