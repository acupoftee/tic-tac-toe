curl --include --request PATCH "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
  --header "Content-Type: application/json" \
  --data '{
    "game": {
      "cell": {
        "index": "'"${INDEX}"'",
        "value": "'"${VALUE}"'"
      },
      "over": "'"${OVER}"'"
    }
  }'

echo
