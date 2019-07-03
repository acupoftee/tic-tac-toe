'use strict'

const store = require('../store.js')
const util = require('../utils/util')

const signUpSuccessful = () => {
  $('.good').modal('show')
  util.hideItems('.sign-up-box')
  util.showItems('.opening')
}

const signUpFailure = () => {
  $('.badIn').modal('show')
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
  $('.nopassword').modal('show')
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
