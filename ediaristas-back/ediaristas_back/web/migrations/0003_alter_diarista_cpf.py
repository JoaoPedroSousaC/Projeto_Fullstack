# Generated by Django 3.2 on 2021-10-27 00:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0002_alter_diarista_cep'),
    ]

    operations = [
        migrations.AlterField(
            model_name='diarista',
            name='cpf',
            field=models.CharField(max_length=11, unique=True),
        ),
    ]
