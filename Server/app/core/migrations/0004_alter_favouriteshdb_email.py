# Generated by Django 3.2.18 on 2023-03-31 16:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_favouriteshdb'),
    ]

    operations = [
        migrations.AlterField(
            model_name='favouriteshdb',
            name='email',
            field=models.CharField(max_length=255),
        ),
    ]
