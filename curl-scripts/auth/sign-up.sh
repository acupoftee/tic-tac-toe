#!/bin/bash

curl --include --request POST "https://tic-tac-toe-wdi.herokuapp.com/sign-up" \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo
