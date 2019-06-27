'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const boardEvents = require('./game/boardEvents')
const authEvents = require('./auth/authEvents')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  boardEvents.runGame()
})
