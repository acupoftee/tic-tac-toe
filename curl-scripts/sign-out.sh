#!/bin/bash

curl --include --request DELETE "https://tic-tac-toe-wdi.herokuapp.com/sign-out" \
  --header "Authorization: Token token=${TOKEN}"

echo
