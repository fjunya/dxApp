# -*- coding: utf-8 -*-

from django.conf.urls import patterns, include, url

urlpatterns = patterns('CiscoDxUketsukeApp.views',
#     url(r'^$', 'CiscoDxUketsuke.views.home', name='home'),
#     url(r'^getData/' 'CiscoDxUketsuke.views.getData'),
    url(r'^member_tsv/$','member_tsv'),
)