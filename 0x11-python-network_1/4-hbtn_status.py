#!/usr/bin/python3 

import requests 

if __name__ == "__main__":
    req = requests.get('https://alx-intranet.hbtn.io/status')
    print("Body response:")
    print("\t-: {}".format(type(req.text)))
    print("\t-:{}".format(req.text))
