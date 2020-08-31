from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    github = models.CharField(max_length=250)
    livesite = models.CharField(max_length=250, null=True, blank=True)

    def __str__(self):
        return self.title

class Technology(models.Model):
    project = models.ForeignKey(to=Project, on_delete=models.CASCADE, related_name='technologies')
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name