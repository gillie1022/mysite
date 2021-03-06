"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf import settings
from django.urls import include, path
from mysite import views as mysite_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', mysite_views.homepage, name='homepage'),
    path('resumé/', mysite_views.resumé, name='resumé'),
    path('projects/', mysite_views.list_projects, name='project_list'),
    path('projects/<int:project_pk>/', mysite_views.project_detail, name='project_detail'),
    path('projects/<technology>/', mysite_views.projects_by_technology, name='projects_by_technology'),
    path('projects/calculator', mysite_views.calculator, name='calculator'),
    path('projects/dog_adoption', mysite_views.dog_adoption, name='dog_adoption'),
    path('projects/the_squarrre', mysite_views.the_squarrre, name='the_squarrre'),
    path('projects/form_validation', mysite_views.form_validation, name='form_validation'),

]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
        path('__debug__/', include(debug_toolbar.urls)),

        # For django versions before 2.0:
        # url(r'^__debug__/', include(debug_toolbar.urls)),
    ] + urlpatterns
