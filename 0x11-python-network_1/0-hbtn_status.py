#!/usr/bin/python3
"""fetches https://intranet.hbtn.io/status"""
import urllib.request

if __name__ == "__main___":
    url = 'https://alx-intranet.hbtn.io/status' 
    req = urllib.request.Request(url)

    with urllib.request.urlopen(req) as resp:
        some_data = resp.read()
    print(some_data)
