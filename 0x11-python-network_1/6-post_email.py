#!/usr/bin/python3 

import sys
import requests 

if __name__ == "__main__":
    url=sys.argv[1]
    email=sys.argv[2]
    email_data={"email":email}

    r = requests.post(url, data=email_data)
    print(r.text)
