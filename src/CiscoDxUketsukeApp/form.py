#-*- coding: utf-8 -*-

from django.forms import ModelForm
from django import forms
from models import Member,Room,Folder,Favorite,Dx
        
class MemberForm(ModelForm):
    class Meta:
        model = Member
        
class RoomForm(ModelForm):
    class Meta:
        model = Room

class FolderForm(ModelForm):
    class Meta:
        model = Folder
        
class FavoriteForm(ModelForm):
    class Meta:
        model = Favorite
        
class DxForm(ModelForm):
    class Meta:
        model = Dx

