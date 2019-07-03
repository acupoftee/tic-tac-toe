'use strict'

const store = require('../store.js')
const util = require('../utils/util')

const signUpSuccessful = () => {
  $('.good').modal('show')
  util.hideItems('.sign-up-box')
  util.showItems('.opening')
  $('form').trigger('reset')
}

const signUpFailure = () => {
  $('.badIn').modal('show')
  $('form').trigger('reset')
}

const signInSuccessful = responseData => {
  $('.in').modal('show')

  // update the user's session info for later
  store.user = responseData.user
  util.hideItems('.sign-in-box')
  util.showItems('.signed-in')
  $('form').trigger('reset')
}

const signInFailure = () => {
  $('.badIn').modal('show')
  $('form').trigger('reset')
}

const changePasswordSuccessful = () => {
  $('.newpassword').modal('show')
  util.hideItems('.change-password-box')
  util.showItems('.signed-in')
  $('form').trigger('reset')
}

const changePasswordFailure = () => {
  $('.nopassword').modal('show')
  $('form').trigger('reset')
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
  $('form').trigger('reset')
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
