# -*- coding: utf-8 -*-

from django.db import models
from django.contrib import admin

class Dx(models.Model):
    identifier = models.CharField("識別ID",max_length=100,blank=False)
    memo = models.TextField("メモ",blank=True)
    def __unicode__(self):
        return self.identifier

class DxAdmin(admin.ModelAdmin):
    list_display = ('pk','identifier')

class Member(models.Model):
    name = models.CharField("名前",max_length=100,blank=False)
    name_en = models.CharField("名前英語",max_length=100,blank=True)
    number = models.CharField("電話番号",max_length=50,blank=True)
    kana = models.CharField("名前かな",max_length=100,blank=True)
    def __unicode__(self):
        return self.name

class MemberAdmin(admin.ModelAdmin):
    list_display = ('pk','name','number')
    
class Room(models.Model):
    name = models.CharField("名前",max_length=100,blank=False)
    name_en = models.CharField("名前英語",max_length=100,blank=True)
    number = models.CharField("電話番号",max_length=50,blank=True)
    kana = models.CharField("名前かな",max_length=100,blank=True)
    def __unicode__(self):
        return self.name
    
class RoomAdmin(admin.ModelAdmin):
    list_display = ('pk','name','number')

class Folder(models.Model):
    name = models.CharField("名前",max_length=100,blank=False)
    name_en = models.CharField("名前英語",max_length=100,blank=True)
    number = models.CharField("電話番号",max_length=50,blank=True)
    kana = models.CharField("名前かな",max_length=100,blank=True)
    dx = models.ManyToManyField(Dx,blank=True)
#     dx = models.ForeignKey(Dx,unique=False,blank=True)
    folders = models.CommaSeparatedIntegerField("フォルダリスト",max_length=100,blank=True)
    members = models.ManyToManyField(Member,blank=True)
    rooms = models.ManyToManyField(Room,blank=True)
    root = models.BooleanField("親フォルダ")
    def __unicode__(self):
        return self.name

class FolderAdmin(admin.ModelAdmin):
    list_display = ('pk','name')
    

class Favorite(models.Model):
    name = models.CharField("名前",max_length=100,blank=False)
    name_en = models.CharField("名前英語",max_length=100,blank=True)
    number = models.CharField("電話番号",max_length=50,blank=True)
    kana = models.CharField("名前かな",max_length=100,blank=True)
    dx = models.ManyToManyField(Dx,blank=True)
#     dx = models.ForeignKey(Dx,unique=True)
    folders = models.CommaSeparatedIntegerField('フォルダリスト',max_length=100,blank=True)
    members = models.ManyToManyField(Member,blank=True)
    rooms = models.ManyToManyField(Room,blank=True)
    def __unicode__(self):
        return self.name
    
class FavoriteAdmin(admin.ModelAdmin):
    list_display = ('pk','name')
    
admin.site.register(Dx, DxAdmin)
admin.site.register(Member,MemberAdmin)
admin.site.register(Room,RoomAdmin)
admin.site.register(Folder,FolderAdmin)
admin.site.register(Favorite, FavoriteAdmin)

    

    
