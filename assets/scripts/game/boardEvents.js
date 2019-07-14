'use strict'

const api = require('./api')
const board = require('./board')
const util = require('../utils/util')
const pieceStore = require('./pieceStore')

const runGame = () => {
  const $cellArray = $('.cell')
  let clicks = 0
  for (let i = 0; i < $cellArray.length; i++) {
    const currentCell = $cellArray[i]

    // adds an event listener for each cells
    $(currentCell).on('click', function () {
      // don't add anything if the board is occupied
      if (!board.isFull() && !board.checkWin()) {
        if ($(currentCell).text() === 'X' || $(currentCell).text() === 'O') {
          $('.message').text('This spot\'s taken')
          $('.message').show()
          hideErrorMessage()
        } else {
          // add a click
          ++clicks
          const cellText = clicks % 2 ? 'X' : 'O'
          const turnText = clicks % 2 ? 'O' : 'X'
          const cellColor = clicks % 2 ? pieceStore.xColor : pieceStore.oColor

          // swap pieces
          $(currentCell).addClass('letter-ani')
          $(currentCell).text(cellText).css('color', cellColor)
          $('.main-message').text(`${turnText}'s turn`)

          // update gameBoard
          board.addPiece(i, cellText)

          // end the game if it's a tie or if there's a winner
          if (!board.checkWin() && board.isFull()) {
            sendMove(i, cellText, true)
            util.hideItems('.main-message')
            util.hideItems('.gameboard')
            util.hideItems('.first-header')

            // show win logo
            util.showItems('.game-finished')
            util.showItems('.win-logo')
            util.showItems('.x')
            util.showItems('.space')
            util.showItems('.o')
            $('.win-message').text('Tie Game!')
            clicks = 0
            $('.gameboard').removeClass('board-ani')
          } else if (board.checkWin()) {
            sendMove(i, cellText, true)

            util.hideItems('.first-header')
            util.hideItems('.gameboard')
            util.showItems('.game-finished')
            util.showItems('.win-logo')
            cellText === 'X' ? util.showItems('.x') : util.showItems('.o')
            $('.win-message').text('Winner!')

            clicks = 0
            $('.gameboard').removeClass('board-ani')
          } else {
            sendMove(i, cellText, false)
          }
        }
      } else {
        $('.message').text('The game\'s over, Click "New Game" to play again!')
        $('.message').show()
        hideErrorMessage()
        clicks = 0
      }
    })
  }
} // end runGame

const sendMove = (index, cell, over) => {
  const move = {
    game: {
      cell: {
        index: index,
        value: cell
      },
      over: over
    }
  }
  api.updateGame(move)
}

const hideErrorMessage = () => {
  setTimeout(function () {
    $('.message').text('')
    $('.message').hide()
  }, 5000)
}

module.exports = {
  runGame
}
