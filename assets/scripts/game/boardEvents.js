'use strict'

const board = require('./board')

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
          // console.log('This spot\'s taken cus YOURE TOO SLOOOOOOOOOW')
          $('.message').text('This spot\'s taken cus YOURE TOO SLOOOOOOOOOW')
          $('.message').show()
          hideErrorMessage()
        } else {
          // add a click
          clicks++
          const cellText = clicks % 2 ? 'X' : 'O'
          const turnText = clicks % 2 ? 'O' : 'X'

          // swap pieces
          $(currentCell).text(cellText)
          $('.player').text(turnText)

          // update gameBoard
          board.addPiece(i, cellText)
          console.log('Board state', board.gameBoard)

          if (!board.checkWin() && board.isFull()) {
            $('.main-message').text('It\'s a tie!')
          } else if (board.checkWin()) {
            $('.main-message').text(`Thanks for playing! ${cellText} wins!`)
          }
        }
      } else {
        $('.message').text('The game\'s over, refresh to play again!')
        $('.message').show()
        hideErrorMessage()
      }
    })
  }
} // end runGame

const hideErrorMessage = () => {
  setTimeout(function () {
    $('.message').text('')
    $('.message').hide()
  }, 5000)
}

module.exports = {
  runGame
}
