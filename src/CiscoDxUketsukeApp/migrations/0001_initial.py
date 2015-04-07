# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Dx',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('identifier', models.CharField(max_length=100, verbose_name=b'\xe8\xad\x98\xe5\x88\xa5ID')),
                ('memo', models.TextField(verbose_name=b'\xe3\x83\xa1\xe3\x83\xa2', blank=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Favorite',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=100, verbose_name=b'\xe5\x90\x8d\xe5\x89\x8d')),
                ('name_en', models.CharField(max_length=100, verbose_name=b'\xe5\x90\x8d\xe5\x89\x8d\xe8\x8b\xb1\xe8\xaa\x9e', blank=True)),
                ('number', models.CharField(max_length=50, verbose_name=b'\xe9\x9b\xbb\xe8\xa9\xb1\xe7\x95\xaa\xe5\x8f\xb7', blank=True)),
                ('kana', models.CharField(max_length=100, verbose_name=b'\xe5\x90\x8d\xe5\x89\x8d\xe3\x81\x8b\xe3\x81\xaa', blank=True)),
                ('folders', models.CommaSeparatedIntegerField(max_length=100, verbose_name=b'\xe3\x83\x95\xe3\x82\xa9\xe3\x83\xab\xe3\x83\x80\xe3\x83\xaa\xe3\x82\xb9\xe3\x83\x88', blank=True)),
                ('dx', models.ManyToManyField(to='CiscoDxUketsukeApp.Dx', blank=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Folder',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=100, verbose_name=b'\xe5\x90\x8d\xe5\x89\x8d')),
                ('name_en', models.CharField(max_length=100, verbose_name=b'\xe5\x90\x8d\xe5\x89\x8d\xe8\x8b\xb1\xe8\xaa\x9e', blank=True)),
                ('number', models.CharField(max_length=50, verbose_name=b'\xe9\x9b\xbb\xe8\xa9\xb1\xe7\x95\xaa\xe5\x8f\xb7', blank=True)),
                ('kana', models.CharField(max_length=100, verbose_name=b'\xe5\x90\x8d\xe5\x89\x8d\xe3\x81\x8b\xe3\x81\xaa', blank=True)),
                ('folders', models.CommaSeparatedIntegerField(max_length=100, verbose_name=b'\xe3\x83\x95\xe3\x82\xa9\xe3\x83\xab\xe3\x83\x80\xe3\x83\xaa\xe3\x82\xb9\xe3\x83\x88', blank=True)),
                ('dx', models.ManyToManyField(to='CiscoDxUketsukeApp.Dx', blank=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Member',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=100, verbose_name=b'\xe5\x90\x8d\xe5\x89\x8d')),
                ('name_en', models.CharField(max_length=100, verbose_name=b'\xe5\x90\x8d\xe5\x89\x8d\xe8\x8b\xb1\xe8\xaa\x9e', blank=True)),
                ('number', models.CharField(max_length=50, verbose_name=b'\xe9\x9b\xbb\xe8\xa9\xb1\xe7\x95\xaa\xe5\x8f\xb7', blank=True)),
                ('kana', models.CharField(max_length=100, verbose_name=b'\xe5\x90\x8d\xe5\x89\x8d\xe3\x81\x8b\xe3\x81\xaa', blank=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='Room',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=100, verbose_name=b'\xe5\x90\x8d\xe5\x89\x8d')),
                ('name_en', models.CharField(max_length=100, verbose_name=b'\xe5\x90\x8d\xe5\x89\x8d\xe8\x8b\xb1\xe8\xaa\x9e', blank=True)),
                ('number', models.CharField(max_length=50, verbose_name=b'\xe9\x9b\xbb\xe8\xa9\xb1\xe7\x95\xaa\xe5\x8f\xb7', blank=True)),
                ('kana', models.CharField(max_length=100, verbose_name=b'\xe5\x90\x8d\xe5\x89\x8d\xe3\x81\x8b\xe3\x81\xaa', blank=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.AddField(
            model_name='folder',
            name='members',
            field=models.ManyToManyField(to='CiscoDxUketsukeApp.Member', blank=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='folder',
            name='rooms',
            field=models.ManyToManyField(to='CiscoDxUketsukeApp.Room', blank=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='favorite',
            name='members',
            field=models.ManyToManyField(to='CiscoDxUketsukeApp.Member', blank=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='favorite',
            name='rooms',
            field=models.ManyToManyField(to='CiscoDxUketsukeApp.Room', blank=True),
            preserve_default=True,
        ),
    ]
