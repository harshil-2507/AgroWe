from django.db import models

class FormData(models.Model):
    Crop = models.CharField(max_length=100)
    Rainfall = models.CharField(max_length=100)
    Temp = models.CharField(max_length=100)
    Soil_Type = models.CharField(max_length=100)
    O2_Level = models.CharField(max_length=100)
    Calcium = models.CharField(max_length=100)
    potassium = models.CharField(max_length=100)
    Phosphorous = models.CharField(max_length=100)
    Nitrogen = models.CharField(max_length=100)
    Magnesium = models.CharField(max_length=100)
    Iron = models.CharField(max_length=100)

    def __str__(self):
        return f"FormData {self.id}"
