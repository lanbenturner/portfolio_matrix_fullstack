# Generated by Django 5.0.3 on 2024-03-28 20:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_rename_address_line1_userprofile_address_line'),
    ]

    operations = [
        migrations.RenameField(
            model_name='userprofile',
            old_name='address_line',
            new_name='address',
        ),
    ]
