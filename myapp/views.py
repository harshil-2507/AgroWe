from django.shortcuts import render, redirect
from .forms import FormDataForm
from .models import FormData, IdealValues
from django.contrib.auth.decorators import login_required

def home_view(request):
    return render(request, 'home.html')
@login_required
def form_view(request):
    if request.method == 'POST':
        form = FormDataForm(request.POST)
        if form.is_valid():
            form_data = form.save(commit=False)
            form_data.user = request.user  # Set the user
            form_data.save()
            return redirect('success')
    else:
        form = FormDataForm()
    return render(request, 'form.html', {'form': form})

@login_required
def property_graph_view(request):
    try:
        ideal_values = IdealValues.objects.first()
        user_data = FormData.objects.filter(user=request.user).last()  # Fetch user-specific data
        if not ideal_values or not user_data:
            return render(request, 'property_graph.html', {'error': 'Data is missing.'})

        property_values = {
            'Crop': ideal_values.Crop,
            'Rainfall': ideal_values.Rainfall,
            'Temp': ideal_values.Temp,
            'Soil_Type': ideal_values.Soil_Type,
            'O2_Level': ideal_values.O2_Level,
            'Calcium': ideal_values.Calcium,
            'Potassium': ideal_values.Potassium,
            'Phosphorous': ideal_values.Phosphorous,
            'Nitrogen': ideal_values.Nitrogen,
            'Magnesium': ideal_values.Magnesium,
            'Iron': ideal_values.Iron
        }

        user_values = {
            'Crop': user_data.Crop,
            'Rainfall': user_data.Rainfall,
            'Temp': user_data.Temp,
            'Soil_Type': user_data.Soil_Type,
            'O2_Level': user_data.O2_Level,
            'Calcium': user_data.Calcium,
            'Potassium': user_data.Potassium,
            'Phosphorous': user_data.Phosphorous,
            'Nitrogen': user_data.Nitrogen,
            'Magnesium': user_data.Magnesium,
            'Iron': user_data.Iron
        }

        context = {
            'property_values': property_values,
            'user_values': user_values
        }

    except Exception as e:
        context = {'error': str(e)}

    return render(request, 'property_graph.html', context)
