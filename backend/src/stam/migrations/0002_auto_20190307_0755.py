# Generated by Django 2.1.7 on 2019-03-07 07:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stam', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='shift',
            name='shift_time',
        ),
        migrations.AlterField(
            model_name='shift',
            name='shift_date',
            field=models.DateTimeField(),
        ),
    ]
