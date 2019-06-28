#!/bin/bash

curl --include --request POST "https://tic-tac-toe-wdi.herokuapp.com/sign-in" \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo
