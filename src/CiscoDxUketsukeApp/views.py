# -*- coding: utf-8 -*-

# from django.shortcuts import render
from django.http import HttpResponse
import csv

def member_tsv(request):
    response = HttpResponse(content_type='text/plain')
#     response = HttpResponse()
    response['Content-Disposition'] = 'attachment; member.txt'
    writer = csv.writer(response,delimiter='\t')
    writer.writerow(['中川工事', 'Koji Nakagawa', '1111', 'なかがわこうじ'])
    writer.writerow(['柳下直樹', 'Naoki Hashimoto', '2222', 'やぎしたなおき'])

    return response

