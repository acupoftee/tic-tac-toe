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
}

const signOutFailure = () => {
  failMessage('Failed to sign out :C')
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
