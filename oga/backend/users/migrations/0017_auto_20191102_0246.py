# Generated by Django 2.2.6 on 2019-11-01 17:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0016_merge_20191102_0138'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='question',
            name='question_type',
        ),
        migrations.AlterField(
            model_name='question',
            name='content',
            field=models.TextField(default='LINE', max_length=100),
        ),
    ]