# Generated by Django 2.1.4 on 2018-12-16 00:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_auto_20181215_1956'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='issuedate',
            field=models.DateField(blank=True),
        ),
    ]