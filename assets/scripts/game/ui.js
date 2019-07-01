'use strict'

const store = require('../store')
const board = require('./board')

const createGameSuccessful = responseData => {
  console.log('You\'ve created a new game! GLHF')
  store.game = responseData.game.id
  store.plays = responseData.game.cells
  console.log(store)
  board.resetGame()
  revealBoard()
}

const createGameFailure = () => {
  console.log('Error creating game')
}

const revealBoard = () => {
  $('.game-board').removeClass('hidden')
  $('.game-board').addClass('active')
}

const hideBoard = () => {
  $('.game-board').removeClass('active')
  $('.game-board').addClass('hidden')
}

const getAllGamesSuccess = responseData => {
  $('.main-message').text(`You've played ${responseData.games.length} games`)
  console.log(`You've played ${responseData.games.length} games`)
  hideBoard()
}

// const hideBoard = () => {
//   $('.game-board').removeClass('active')
//   $('.game-board').addClass('hidden')
// }

module.exports = {
  createGameSuccessful,
  createGameFailure,
  getAllGamesSuccess
}
