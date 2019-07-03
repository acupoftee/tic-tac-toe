'use strict'

const store = require('../store')
const board = require('./board')
const util = require('../utils/util')

const createGameSuccessful = responseData => {
  store.game = responseData.game.id
  store.plays = responseData.game.cells
  board.resetGame()
  $('.gameboard').addClass('board-ani')
  util.hideItems('.logo')
  util.showItems('.gameboard')
}

const createGameFailure = () => {
  console.log('Error creating game')
}

const getAllGamesSuccess = responseData => {
  const word = responseData.games.length === 1 ? 'game' : 'games'
  const encouragement = responseData.games.length === 0 ? 'Get in there and play! 😃' : 'Keep it up! 💪🔥'
  $('.gameStats').text(`You've played ${responseData.games.length} ${word}. ${encouragement}`)
  $('.playerStats').modal('show')
}

module.exports = {
  createGameSuccessful,
  createGameFailure,
  getAllGamesSuccess
}
