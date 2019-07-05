'use strict'

const api = require('./api')
const ui = require('./ui')

const onCreateGame = event => {
  event.preventDefault()

  api.createGame()
    .then(ui.createGameSuccessful)
    .catch(ui.createGameFailure)
}

const onGetStats = event => {
  event.preventDefault()

  api.getAllGames()
    .then(ui.getAllGamesSuccess)
    .catch(console.error)
}

module.exports = {
  onCreateGame,
  onGetStats
}
