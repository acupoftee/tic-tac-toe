'use strict'

const store = require('../store.js')
const util = require('../utils/util')

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
  $('.good').modal('show')
  util.hideItems('.sign-up-box')
  util.showItems('.opening')
}

const signUpFailure = () => {
  $('.bad').modal('show')
}

const signInSuccessful = responseData => {
  $('.in').modal('show')

  // update the user's session info for later
  store.user = responseData.user
  util.hideItems('.sign-in-box')
  util.showItems('.signed-in')
}

const signInFailure = () => {
  $('.badIn').modal('show')
}

const changePasswordSuccessful = () => {
  $('.newpassword').modal('show')
  util.hideItems('.change-password-box')
  util.showItems('.signed-in')
}

const changePasswordFailure = () => {
  $('.nopass').modal('show')
}

const signOutSuccessful = () => {
  $('.out').modal('show')
  util.hideItems('.signed-in')
  util.hideItems('.gameboard')

  util.showItems('.logo')
  util.showItems('.opening')
  $('form').trigger('reset')
}

const signOutFailure = () => {
  $('.badOut').modal('show')
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
