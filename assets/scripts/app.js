'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// const boardEvents = require('./game/boardEvents')
const authEvents = require('./auth/authEvents')
const gameEvents = require('./game/gameEvents')
const boardEvents = require('./game/boardEvents')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here

  // AUTHENTICATION EVENTS
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  // GAME EVENTS
  $('#create-game').on('submit', gameEvents.onCreateGame)
  boardEvents.runGame()
})
