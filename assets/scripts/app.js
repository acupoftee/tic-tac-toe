'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const board = require('./game/board')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here

  // gets all the cells
  const $cellArray = $('.cell')
  let clicks = 0
  for (let i = 0; i < $cellArray.length; i++) {
    const currentCell = $cellArray[i]
    // adds an event listener for each cells
    $(currentCell).on('click', function () {
      // don't add anything if the board is occupied
      if ($(currentCell).text() === 'X' || $(currentCell).text() === 'O') {
        console.log('This spot\'s taken cus YOURE TOO SLOOOOOOOOOW')
      } else if (!board.checkWin()) {
        // add a click
        ++clicks
        const cellText = clicks % 2 ? 'X' : 'O'
        const turnText = clicks % 2 ? 'O' : 'X'

        // swap pieces
        $(currentCell).text(cellText)
        $('.player').text(turnText)

        // update gameBoard
        board.addPiece(i, cellText)
        console.log('Board state', board.gameBoard)
        if (board.checkWin()) {
          $('p').text('Thanks for playing!')
        }
      }
    })
  }
  // for (let i = 0; i < $cellArray.length; i++) {
  //   do {
  //     const currentCell = $cellArray[i]
  //     // adds an event listener for each cells
  //     $(currentCell).on('click', function () {
  //       // don't add anything if the board is occupied
  //       if ($(currentCell).text() === 'X' || $(currentCell).text() === 'O') {
  //         console.log('This spot\'s taken cus YOURE TOO SLOOOOOOOOOW')
  //       } else {
  //         // add a click
  //         ++clicks
  //         const cellText = clicks % 2 ? 'X' : 'O'
  //         const turnText = clicks % 2 ? 'O' : 'X'
  //
  //         // swap pieces
  //         $(currentCell).text(cellText)
  //         $('.player').text(turnText)
  //
  //         // update gameBoard
  //         board.addPiece(i, cellText)
  //         console.log('Board state', board.gameBoard)
  //         console.log(board.checkWin())
  //       }
  //     })
  //   } while (!board.checkWin())
  // }
  // $('p').text('Thanks for playing!')
})
