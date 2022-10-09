#!/usr/bin/python3
"""
    A script that takes in a URL and sends a request to the URL
    and displays the body of the response decoded in utf-8.
    urllib.error.HTTPError is managed and printed in the form
    Error code: <HTTP status code>
"""

import sys
from urllib.request import Request
from urllib.parse import urlencode
from urllib.error import HTTPError


if __name__ == "__main__":
    req = Request(sys.argv[1])
    try:
        with urlopen(req) as resp:
            html = resp.read()
            print("{}".format(html.decode('utf-8')))
    except HTTPError as e:
        print("Error code: {}".format(e.code))
