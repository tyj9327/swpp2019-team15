# Generated by Django 2.2.5 on 2019-12-08 06:34

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('users', '0028_profile_rated_answers_list'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='answer',
            name='is_up',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='rated_answers_list',
        ),
        migrations.AddField(
            model_name='answer',
            name='numbers_rated_down',
            field=models.PositiveSmallIntegerField(default=0),
        ),
        migrations.AddField(
            model_name='answer',
            name='numbers_rated_up',
            field=models.PositiveSmallIntegerField(default=0),
        ),
        migrations.AddField(
            model_name='answer',
            name='users_rated_answers',
            field=models.ManyToManyField(blank=True, null=True, related_name='rated_answers', to=settings.AUTH_USER_MODEL),
        ),
    ]