# Generated by Django 2.2.6 on 2019-12-16 02:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0035_question_follow_count'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='reliability',
            field=models.FloatField(default=0),
        ),
    ]