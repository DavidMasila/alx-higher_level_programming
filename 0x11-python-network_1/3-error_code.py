#!/bin/bash/python3 

from urllib.request import Request, urlopen
from urllib.parse import urlencode
from urllib.error import HTTPError
import sys 


if __name__=="__main__":
    url=sys.argv[1]

    req = Request(url)

    try:
        with urlopen(req) as resp:
            body=resp.read()
            print(body.decode("utf-8"))
    except HTTPError as e:
        print("Error code: ",e.code)
