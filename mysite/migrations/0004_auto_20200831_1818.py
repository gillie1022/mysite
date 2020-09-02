# Generated by Django 3.1 on 2020-08-31 18:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mysite', '0003_auto_20200828_1517'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='technology',
            name='project',
        ),
        migrations.AddField(
            model_name='project',
            name='technologies',
            field=models.ManyToManyField(related_name='projects', to='mysite.Technology'),
        ),
    ]