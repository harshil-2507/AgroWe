from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_view, name='home'),
    path('form/', views.form_view, name='form_view'),
    # path('success/', views.success_view, name='success'),
    path('property-graph/', views.property_graph_view, name='property_graph'),  # New path for property graph
]
