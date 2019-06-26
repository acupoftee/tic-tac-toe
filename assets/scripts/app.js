'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

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
      //
      if ($(currentCell).text() === 'X' || $(currentCell).text() === 'O') {
        console.log('This spot\'s taken cus YOURE TOO SLOOOOOOOOOW')
      } else {
        // add a click
        ++clicks

        // swap pieces
        $(currentCell).text(clicks % 2 ? 'X' : 'O')
        $('.player').text(clicks % 2 ? 'O' : 'X')
      }
    })
  }
})
