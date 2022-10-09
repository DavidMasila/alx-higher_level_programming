#!/bin/bash/python3 
from urllib.request import Request, urlopen
from urllib.parse import urlencode
import sys 


if __name__=="__main__":
    url = sys.argv[1]
    email=urlencode({"email":sys.argv[2]}).encode("ascii")

    req = Request(url, email)
    with urlopen(req) as resp:
        body=resp.read()
        print(body.decode("utf-8"))
