'use strict'

const store = require('../store.js')

const successMessage = message => {
  $('#form-message').text(message)
  $('#form-message').removeClass('failure')
  $('#form-message').addClass('success')

  // clear out our forms
  $('form').trigger('reset')
}

const failMessage = message => {
  $('#form-message').text(message)
  $('#form-message').removeClass('success')
  $('#form-message').addClass('failure')

  // clear out our forms
  $('form').trigger('reset')
}

const signUpSuccessful = () => {
  successMessage('You\'ve signed up successfully! 🎉')
}

const signUpFailure = () => {
  failMessage('You shall not pass 🧙‍♂️‍')
}

const signInSuccessful = responseData => {
  successMessage('You\'ve signed in successfully! 🎉')

  // update the user's session info for later
  store.user = responseData.user
  hideItems('#sign-in')
  hideItems('#sign-up')
  showItems('#change-password')
  showItems('#sign-out')
  revealButton()
}

const signInFailure = () => {
  failMessage('You shall not pass 🧙‍♂️‍')
}

const changePasswordSuccessful = () => {
  successMessage('You\'ve changed your password successfully! 🎉')
}

const changePasswordFailure = () => {
  failMessage('Password change failed')
}

const signOutSuccessful = () => {
  successMessage('You\'ve signed out successfully! 🎉')
  hideButton()
  hideBoard()
  showItems('#sign-up')
  showItems('#sign-in')
  hideItems('#change-password')
  hideItems('#sign-out')
  $('.games').text('')
}

const signOutFailure = () => {
  failMessage('Failed to sign out :C')
}

// const revealBoard = () => {
//   $('.game-board').removeClass('hidden')
//   $('.game-board').addClass('active')
// }
//
const hideBoard = () => {
  $('.game-board').removeClass('active')
  $('.game-board').addClass('hidden')
}

const revealButton = () => {
  $('#create-game').removeClass('hidden')
  $('#create-game').addClass('active')

  $('#get-game').removeClass('hidden')
  $('#get-game').addClass('active')
}

const hideButton = () => {
  $('#create-game').removeClass('active')
  $('#create-game').addClass('hidden')

  $('#get-game').removeClass('active')
  $('#get-game').addClass('hidden')
}

const hideItems = itemName => {
  $(itemName).removeClass('active')
  $(itemName).addClass('hidden')
}

const showItems = itemName => {
  $(itemName).removeClass('hidden')
  $(itemName).addClass('active')
}
module.exports = {
  signUpSuccessful,
  signUpFailure,
  signInSuccessful,
  signInFailure,
  changePasswordSuccessful,
  changePasswordFailure,
  signOutSuccessful,
  signOutFailure
}
