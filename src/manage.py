#!/usr/bin/env python
import os
import sys

os.environ['DJANGO_SETTINGS_MODULE'] = 'CiscoDxAdmin.settings'

if __name__ == "__main__":
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "CiscoDxAdmin.settings")

    from django.core.management import execute_from_command_line

    execute_from_command_line(sys.argv)
