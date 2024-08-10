from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('form/', views.form_view, name='form_view'),
    path('success/', views.success_view, name='success'),
]
