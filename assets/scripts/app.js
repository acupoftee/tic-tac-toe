'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  const $cellArray = $('.cell')
  // console.log($cellArray)
  for (let i = 0; i < $cellArray.length; i++) {
    // console.log(`Cell Array at index ${i}`, $cellArray[i])
    const currentCell = $cellArray[i]
    $(currentCell).on('click', function () {
      $(currentCell).text('x')
    })
  }
})
