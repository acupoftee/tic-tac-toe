'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
// const boardEvents = require('./game/boardEvents')
const authEvents = require('./auth/authEvents')
const gameEvents = require('./game/gameEvents')
const boardEvents = require('./game/boardEvents')
const styleEvents = require('./ui/styleEvents')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here

  $('#sign-up-button').on('click', styleEvents.getSignUpForm)
  $('#sign-in-button').on('click', styleEvents.getSignInForm)
  $('.back').on('click', styleEvents.getLandingPage)

  // AUTHENTICATION EVENTS
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  // GAME EVENTS
  $('#create-game').on('submit', gameEvents.onCreateGame)
  $('#get-game').on('submit', gameEvents.onGetStats)
  boardEvents.runGame()
})
