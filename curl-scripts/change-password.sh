#!/bin/bash

curl --include --request PATCH "https://tic-tac-toe-wdi.herokuapp.com/change-password" \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "passwords": {
      "old": "'"${OLD}"'",
      "new": "'"${NEW}"'"
    }
  }'

echo
