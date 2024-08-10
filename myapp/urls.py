from django.urls import path, include
from . import views
from .views import custom_login_view

urlpatterns = [
    path('accounts/login/', views.custom_login_view, name='login'),
    path('', views.home_view, name='home'),
    path('form/', views.form_view, name='form_view'),
    path('accounts/', include('django.contrib.auth.urls')),
    path('property-graph/', property_graph_view, name='property_graph'),
    path('success/', views.success_view, name='success'),
    path('property-graph/', views.property_graph_view, name='property_graph'),  # New path for property graph
]
