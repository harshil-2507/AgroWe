from django.shortcuts import render, redirect
from .forms import FormDataForm

def form_view(request):
    if request.method == 'POST':
        form = FormDataForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('success')
    else:
        form = FormDataForm()
    return render(request, 'form.html', {'form': form})

def home(request):
    return render(request, 'home.html')

def success_view(request):
    return render(request, 'success.html')
