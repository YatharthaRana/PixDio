# Generated by Django 4.2.1 on 2023-06-06 10:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_upscaleimage'),
    ]

    operations = [
        migrations.AlterField(
            model_name='upscaleimage',
            name='inp',
            field=models.ImageField(upload_to='media/'),
        ),
    ]
