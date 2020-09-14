from django.db import models

class Technology(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.CharField(max_length=250, null=True, blank=True)
    github = models.CharField(max_length=250)
    livesite = models.CharField(max_length=250, null=True, blank=True)
    outside_livesite = models.CharField(max_length=250, null=True, blank=True)
    technologies = models.ManyToManyField('Technology', related_name='projects')

    def __str__(self):
        return self.title

