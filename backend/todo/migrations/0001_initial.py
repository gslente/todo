# Generated by Django 5.0.2 on 2024-02-14 14:11

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=50)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('published', models.BooleanField(default=False)),
                ('is_complete', models.BooleanField(default=False)),
                ('body', models.CharField(max_length=250)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]