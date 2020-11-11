from django.shortcuts import render, redirect, get_object_or_404
from .models import Project, Technology

def homepage(request):
    return render(request, 'mysite/index.html')

def resumé(request):
    return render(request, 'mysite/resumé.html')

def list_projects(request):
    projects = Project.objects.all().order_by('title')
    return render(request, 'mysite/list_projects.html', {'projects': projects})

def project_detail(request, project_pk):
    project = get_object_or_404(Project.objects.all(), pk=project_pk)
    return render(request, 'mysite/project_detail.html', {'project': project})

def projects_by_technology(request, technology):
    technology = get_object_or_404(Technology.objects.all(), name=technology)
    projects = Project.objects.filter(technologies__name__contains=technology)
    return render(request, 'mysite/projects_by_technology.html', {'projects': projects, 'technology': technology})

def calculator(request):
    return render(request, 'mysite/projects/calculator.html')

def dog_adoption(request):
    return render(request, 'mysite/projects/dog_adoption.html')

def the_squarrre(request):
    return render(request, 'mysite/projects/the_squarrre.html')

def form_validation(request):
    return render(request, 'mysite/projects/form_validation.html')