#!/bin/bash

curl --include --request GET "https://tic-tac-toe-wdi.herokuapp.com/games" \
--header "Content-Type: application/json" \
--header "Authorization: Token token=${TOKEN}" \

echo
