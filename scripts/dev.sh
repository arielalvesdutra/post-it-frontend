#!/bin/bash

node_url="http://$(print-current-ipv4):8060"
echo "> Backend url: $node_url"
REACT_APP_BACKEND_URL=$node_url npm start

