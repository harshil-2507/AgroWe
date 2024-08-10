from django.shortcuts import render, redirect
from .forms import FormDataForm
import plotly.graph_objs as go
from django.shortcuts import render
from django.contrib.auth import authenticate, login as auth_login
from django.contrib.auth.forms import AuthenticationForm
from .models import FormData, IdealValues
from django.contrib.auth.decorators import login_required

def home_view(request):
    return render(request, 'home.html')

def custom_login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            auth_login(request, user)
            return redirect(request.GET.get('next', '/'))
    else:
        form = AuthenticationForm()
    return render(request, 'registration/custom_login.html', {'form': form})

@login_required
def form_view(request):
    if request.method == 'POST':
        form = FormDataForm(request.POST)
        if form.is_valid():
            form_data = form.save(commit=False)
            form_data.user = request.user
            form_data.save()
            return redirect('success')
        else:
            # Provide feedback on form errors if needed
            context = {'form': form}
    else:
        form = FormDataForm()
        context = {'form': form}

    return render(request, 'form.html', context)


# def success_view(request):
#     context = {
#         'Crop': 10
#         ''
#
#     }
#     return render (request , 'property_graph.html',context)

@login_required
def property_graph_view(request):
    # Fetch user data (this is just an example, adjust as needed)
    user_data = FormData.objects.filter(user_id=request.user.id).values('field1', 'field2', 'field3', 'field4',
                                                                        'field5', 'field6', 'field7', 'field8',
                                                                        'field9', 'field10')

    if user_data.exists():
        user_data = user_data[0]
    else:
        user_data = {f'field{i}': 0 for i in range(1, 11)}

    # Define ideal data
    ideal_data = {
        'field1': 50, 'field2': 60, 'field3': 70, 'field4': 80,
        'field5': 90, 'field6': 100, 'field7': 110, 'field8': 120,
        'field9': 130, 'field10': 140
    }

    # Create the traces for Plotly
    trace1 = go.Bar(x=list(user_data.keys()), y=list(user_data.values()), name='User Data')
    trace2 = go.Bar(x=list(ideal_data.keys()), y=list(ideal_data.values()), name='Ideal Data')

    layout = go.Layout(
        barmode='group',
        title='Comparison of User Data and Ideal Data'
    )

    fig = go.Figure(data=[trace1, trace2], layout=layout)
    graph_div = fig.to_html(full_html=False)

    return render(request, 'property_graph.html', {'graph_div': graph_div})

    property_values = {
            'Crop': ideal_values.Crop,
            'Rainfall': ideal_values.Rainfall,
            'Climate': ideal_values.Temp,
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
            'Climate': user_data.Temp,
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
