'use strict'

const api = require('./api')
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
          $('.message').text('This spot\'s taken cus YOURE TOO SLOOOOOOOOOW')
          $('.message').show()
          hideErrorMessage()
        } else {
          // add a click
          ++clicks
          const cellText = clicks % 2 ? 'X' : 'O'
          const turnText = clicks % 2 ? 'O' : 'X'
          const cellColor = clicks % 2 ? '#373e49' : '#f7fcfc'

          // swap pieces
          $(currentCell).text(cellText).css('color', cellColor)
          $(currentCell).addClass('letter-ani')
          $('.main-message').text(`${turnText}'s turn`)

          // update gameBoard
          board.addPiece(i, cellText)

          // end the game if it's a tie or if there's a winner
          if (!board.checkWin() && board.isFull()) {
            sendMove(i, cellText, true)
            $('.main-message').text('It\'s a tie!')
            clicks = 0
            $('.gameboard').removeClass('board-ani')
          } else if (board.checkWin()) {
            sendMove(i, cellText, true)
            $('.main-message').text(`Thanks for playing! ${cellText} wins!`)
            clicks = 0
            $('.gameboard').removeClass('board-ani')
          } else {
            sendMove(i, cellText, false)
          }
        }
      } else {
        $('.message').text('The game\'s over, refresh to play again!')
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
  console.log(move)
  api.updateGame(move)
    .then(console.log)
    .catch(console.error)
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
