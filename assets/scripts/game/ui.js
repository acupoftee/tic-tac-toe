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
  $('.gameStats').text(`You've played ${responseData.games.length} games!`)
  $('.playerStats').modal('show')
}

module.exports = {
  createGameSuccessful,
  createGameFailure,
  getAllGamesSuccess
}
