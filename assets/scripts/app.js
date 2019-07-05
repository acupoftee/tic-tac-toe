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

  // AUTHENTICATION EVENTS
  $('#sign-up-button').on('click', styleEvents.getSignUpForm)
  $('#sign-in-button').on('click', styleEvents.getSignInForm)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)

  $('.create-game').on('click', gameEvents.onCreateGame)
  $('#get-games').on('click', gameEvents.onGetStats)
  $('#new-password').on('click', styleEvents.getPasswordForm)
  $('#home').on('click', styleEvents.getHome)

  // GAME EVENTS
  $('.back').on('click', styleEvents.getLandingPage)
  $('.game-back').on('click', styleEvents.getGamePage)
  boardEvents.runGame()
})
