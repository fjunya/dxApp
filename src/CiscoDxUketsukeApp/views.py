# -*- coding: utf-8 -*-

from django.shortcuts import render_to_response
from django.http import HttpResponse
from models import *
import csv
from form import *
from django.core.context_processors import csrf, request
from django.http import JsonResponse
import io
from django.views.decorators.csrf import csrf_exempt


def member_tsv(request):
    """
    連絡先リスト(member.js用)のtsvファイルを返す
    """
    members = Member.objects.all()
    response = HttpResponse(content_type='text/plain',status=200)
    response['Content-Disposition'] = 'attachment; member.txt'
    writer = csv.writer(response,delimiter='\t')
    for member in members:
        writer.writerow([member.name.encode('utf-8'), member.name_en.encode('utf-8'), member.number.encode('utf-8'), member.kana.encode('utf-8')])
    return response

def member_json(request):
    """
    member.jsと同じ形式のファイルを返す
    """
    members = Member.objects.all()
    response = HttpResponse(content_type='text/plain')

    value = u"var member = ["
    for member in members:
        file_content = u"""
        {
            name:"%s",
            name_en: "%s",
            number: "%s",
            kana: "%s"
        },""" % (member.name, member.name_en, member.number, member.kana)
        value += file_content
    value += u"]"
    output = io.StringIO()
    output.write(value)
    response = HttpResponse(output.getvalue(), content_type="text/plain",status=200)
    response['Content-Disposition'] = 'attachment; member.txt'
    return response



    

def room_tsv(request):
    """
    部屋のリストのtsvファイルを返す
    """
    rooms = Room.objects.all()
    response = HttpResponse(content_type='text/plain')
    response['Content-Disposition'] = 'attachment; room.txt'
    writer = csv.writer(response,delimiter='\t')
    for room in rooms:
        writer.writerow([room.name.encode('utf-8'), room.name_en.encode('utf-8'), room.number.encode('utf-8'), room.kana.encode('utf-8')])
    return response

def room_json(request):
    """
    room.jsと同じ形式のファイルを返す
    """
    rooms = Room.objects.all()
    response = HttpResponse(content_type='text/plain')

    value = u"var room = ["
    for room in rooms:
        file_content = u"""
        {
            name:"%s",
            name_en: "%s",
            number: "%s",
            kana: "%s"
        },""" % (room.name, room.name_en, room.number, room.kana)
        value += file_content
    value += u"]"
    output = io.StringIO()
    output.write(value)
    response = HttpResponse(output.getvalue(), content_type="text/plain")
    response['Content-Disposition'] = 'attachment; room.txt'
    return response

@csrf_exempt
def folder_tsv(request):
    """
    フォルダーのtsvファイルを返す
    """
    if request.method == 'POST':
        identifier = request.POST['identifier']
        dx = Dx.objects.filter(identifier=identifier).get()
        folders = Folder.objects.filter(dx=dx.pk).order_by('pk')
        response = HttpResponse(content_type='text/plain')
        response['Content-Disposition'] = 'attachment; folder.txt'
        writer = csv.writer(response,delimiter='\t')
        folder_list = []
        for folder in folders:
            folder_list.append(folder.pk)
        for folder in folders:
            member_list = folder.members.values_list()
            member_val = "["
            for val in member_list:
                member_val = member_val + str(val[0] -1) + ","
            member_val = member_val + "]"
            room_list = folder.rooms.values_list()
            room_val = "["
            for val in room_list:
                room_val = room_val + str(val[0] -1) + ","
            room_val = room_val + "]"
            folder_list2 = folder.folders.split(',')
            folders_val = '['
            for folder_number in folder_list2:
                if not '' == folder_number:
                    folders_val = folders_val + str(folder_list.index(int(folder_number))) + ","
            folders_val = folders_val + ']' 
            writer.writerow([folder.name.encode('utf-8'),folder.name_en.encode('utf-8'),
                            folders_val,member_val,room_val])
        return response
#         return HttpResponse(status=200)

@csrf_exempt
def folder_json(request):
    """
    folder.jsと同じ形式のファイルを返す
    """
    if request.method == 'POST':
        identifier = request.POST['identifier']
        dx = Dx.objects.filter(identifier=identifier).get()
        folders = Folder.objects.filter(dx=dx.pk).order_by('pk')
        value = u"var folder = ["
        folder_list = []
        for folder in folders:
            folder_list.append(folder.pk)
        for folder in folders:
            member_list = folder.members.values_list()
            member_val = "["
            for val in member_list:
                member_val = member_val + str(val[0] -1) + ","
            member_val = member_val + "]"
            room_list = folder.rooms.values_list()
            room_val = "["
            for val in room_list:
                room_val = room_val + str(val[0] -1) + ","
            room_val = room_val + "]"
            folder_list2 = folder.folders.split(',')
            folders_val = '['
            for folder_number in folder_list2:
                if not '' == folder_number:
                    folders_val = folders_val + str(folder_list.index(int(folder_number))) + ","
            folders_val = folders_val + ']'
            file_content = """
            {
            name:"%s",
            name_en:"%s",
            folders:%s,
            members:%s,
            rooms:%s,
            },
            """ % (folder.name,folder.name_en,folders_val,member_val,room_val) 
            value += file_content
        value += u"]"
        output = io.StringIO()
        output.write(value)
        response = HttpResponse(output.getvalue(), content_type="text/plain")
        response['Content-Disposition'] = 'attachment; folder.txt'
        return response

@csrf_exempt
def favorite_tsv(request):
    """
    お気に入りのtsvファイルを返す
    """
    if request.method == 'POST':
        identifier = request.POST['identifier']
        dx = Dx.objects.filter(identifier=identifier).get()
        folders = Favorite.objects.filter(dx=dx.pk).order_by('pk')
        response = HttpResponse(content_type='text/plain')
        response['Content-Disposition'] = 'attachment; folder.txt'
        writer = csv.writer(response,delimiter='\t')
        folder_list = []
        for folder in folders:
            folder_list.append(folder.pk)
        for folder in folders:
            member_list = folder.members.values_list()
            member_val = "["
            for val in member_list:
                member_val = member_val + str(val[0] -1) + ","
            member_val = member_val + "]"
            room_list = folder.rooms.values_list()
            room_val = "["
            for val in room_list:
                room_val = room_val + str(val[0] -1) + ","
            room_val = room_val + "]"
            folder_list2 = folder.folders.split(',')
            folders_val = '['
            for folder_number in folder_list2:
                if not '' == folder_number:
                    folders_val = folders_val + str(folder_list.index(int(folder_number))) + ","
            folders_val = folders_val + ']' 
            writer.writerow([folder.name.encode('utf-8'),folder.name_en.encode('utf-8'),
                            folders_val,member_val,room_val])
        return response

@csrf_exempt    
def favorite_json(request):
    """
    fav.jと同じ形式のファイルを返す
    """
    if request.method == 'POST':
        identifier = request.POST['identifier']
        dx = Dx.objects.filter(identifier=identifier).get()
        folders = Favorite.objects.filter(dx=dx.pk).order_by('pk')
        folder_list = []
        value = u"var fav = ["
        for folder in folders:
            folder_list.append(folder.pk)
        for folder in folders:
            member_list = folder.members.values_list()
            member_val = "["
            for val in member_list:
                member_val = member_val + str(val[0] -1) + ","
            member_val = member_val + "]"
            room_list = folder.rooms.values_list()
            room_val = "["
            for val in room_list:
                room_val = room_val + str(val[0] -1) + ","
            room_val = room_val + "]"
            folder_list2 = folder.folders.split(',')
            folders_val = '['
            for folder_number in folder_list2:
                if not '' == folder_number:
                    folders_val = folders_val + str(folder_list.index(int(folder_number))) + ","
            folders_val = folders_val + ']' 
            file_content = """
            {
            name:"%s",
            name_en:"%s",
            folders:%s,
            members:%s,
            rooms:%s,
            },
            """ % (folder.name,folder.name_en,folders_val,member_val,room_val) 
            value += file_content
        value += u"]"
        output = io.StringIO()
        output.write(value)
        response = HttpResponse(output.getvalue(), content_type="text/plain")
        response['Content-Disposition'] = 'attachment; folder.txt'
        return response
    
def home(request):
    template_name = 'dx/home.html'
    c = {}
    c.update(csrf(request))
    return render_to_response(template_name,c)

def fav(request):
    template_name = 'dx/fav.html'
    c = {}
    c.update(csrf(request))
    return render_to_response(template_name,c)

def list(request):
    template_name = 'dx/list.html'
    c = {}
    c.update(csrf(request))
    return render_to_response(template_name,c)

def index(request):
    template_name = 'dx/index.html'
    c = {}
    c.update(csrf(request))
    return render_to_response(template_name,c)
    
def top(request):
    template_name = 'top.html'
    c = {}
    c.update(csrf(request))
    c.update({'top':'active'})
    dxs = Dx.objects.all()
    c.update({'dxs':dxs})
    return render_to_response(template_name,c)

def member(request):
    template_name = 'member.html'
    c = {}
    c.update(csrf(request))
    c.update({'member':'active'})
    members = Member.objects.all()
    c.update({'members':members})
    return render_to_response(template_name,c)

def room(request):
    template_name = 'room.html'
    c = {}
    c.update(csrf(request))
    c.update({'room':'active'})
    rooms = Room.objects.all()
    c.update({'rooms':rooms})
    return render_to_response(template_name,c)

def folder(request,dxId=None):
    template_name = 'folder.html'
    c = {}
    c.update(csrf(request))
    c.update({'folder':'active'})
    if not dxId:
        dxs = Dx.objects.all()
        c.update({'dxs':dxs})
        c.update({'folder_top':True})
    else:
        folders = Folder.objects.filter(dx=dxId)
        members = Member.objects.all()
        c.update({'folders':folders})
        c.update({'folder_top':False})
        c.update({'members':members})
    return render_to_response(template_name,c)
    

def add_dx(request):
    if request.method == "POST":
        identifier = request.POST['identifier']
        memo = request.POST['memo']
        dx = Dx.objects.filter(identifier=identifier)
        dx_data = {'identifier':identifier,
                   'memo': memo}
        dx_form = DxForm(dx_data)
        if len(dx) == 0:
            if dx_form.is_valid():
                dx_form.save()
                response = JsonResponse({'result': 'ok'})
            else:
                response = JsonResponse({'result': 'ng'})
        else:
            response = JsonResponse({'result': 'exist'})
        return response

def add_member(request):
    if request.method == "POST":
        name = request.POST['name']
        name_en = request.POST['name_en']
        number = request.POST['number']
        kana = request.POST['kana']
        data = {'name':name,
                'name_en': name_en,
                'number': number,
                'kana': kana}
        member_form = MemberForm(data)
        if member_form.is_valid():
            member_form.save()
            response = JsonResponse({'result': 'ok'})
        else:
            response = JsonResponse({'result': 'ng'})
        return response
    
def add_room(request):
    if request.method == "POST":
        name = request.POST['name']
        name_en = request.POST['name_en']
        number = request.POST['number']
        kana = request.POST['kana']
        data = {'name':name,
                'name_en': name_en,
                'number': number,
                'kana': kana}
        room_form = RoomForm(data)
        if room_form.is_valid():
            room_form.save()
            response = JsonResponse({'result': 'ok'})
        else:
            response = JsonResponse({'result': 'ng'})
        return response
        
# def add_folder(request):
#     if request.method == "POST":
        
    

def add_member_room_db(request):
    """
    テスト用のデータの投入
    """
    for i in range(10):
        member_data = {'name': "名前" + str(i),
                       'name_en': "Name" + str(i),
                       'number': '1000' + str(i),
                       'kana': 'なまえ' + str(i)}
        member_form = MemberForm(member_data)
        member_form.save()
        room_data = {'name': "名前" + str(i),
                       'name_en': "Name" + str(i),
                       'number': '1000' + str(i),
                       'kana': 'なまえ' + str(i)}
        room_form = RoomForm(room_data)
        room_form.save()
        folder_data = {'name':"フォルダ" + str(i),
                       'name_en':"folder" + str(i),
                       'root':False}
        folder_form = FolderForm(folder_data)
        folder_form.save()
        favorite_data = {'name':"お気に入り" + str(i),
                       'name_en':"favorite" + str(i)}
        favorite_form = FavoriteForm(favorite_data)
        favorite_form.save()
        dx_data = {'identifier':'abcdef' + str(i)}
        dx_form = DxForm(dx_data)
        dx_form.save()
    return HttpResponse(status=200)

def test(request):
    template_name = 'test.html'
    c = {}
    c.update(csrf(request))
    print "#######"
    print c
    return render_to_response(template_name,c)
    
    
    
    

