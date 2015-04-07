# -*- coding: utf-8 -*-

from django.conf.urls import patterns, include, url

urlpatterns = patterns('CiscoDxUketsukeApp.views',
#     url(r'^$', 'CiscoDxUketsuke.views.home', name='home'),
#     url(r'^getData/' 'CiscoDxUketsuke.views.getData'),
    url(r'^member_tsv/$','member_tsv'),
    url(r'^room_tsv/$','room_tsv'),
    url(r'^folder_tsv/$','folder_tsv'),
    url(r'^test/$','test'),
    url(r'^top/$','top'),
    url(r'^member/$','member'),
    url(r'^room/$','room'),
    url(r'^folder/$','folder'),
    url(r'^folder/(?P<dxId>\d+)/$','folder'),
    url(r'^home/$','home'),
    url(r'^fav/$','fav'),
    url(r'^index/$','index'),
    url(r'^list/$','list'),
    url(r'^add_dx/$','add_dx'),
    url(r'^add_member/$','add_member'),
    url(r'^add_room/$','add_room'),
    url(r'^add1/$','add_member_room_db'),
    url(r'^favorite_tsv/$','favorite_tsv'),
)