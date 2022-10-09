#!/usr/bin/python3 

import sys
import urllib.request
import urllib.error
import urllib.parse

if __name__ == "__main__":
    url = sys.argv[1]
    req = urllib.request.Request(url)
    try:
        with urllib.request.urlopen(req) as resp:
            body = resp.read()
            print(body.decode("utf-8"))
    except urllib.error.HTTPError as e:
        print("Error code: ",e.code)
