# Generated by Django 3.1.1 on 2020-09-09 14:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mysite', '0007_project_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='image',
            field=models.CharField(blank=True, max_length=250, null=True),
        ),
    ]
