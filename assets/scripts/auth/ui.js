'use strict'

// const store = require('../store.js')

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
  successMessage('You signed up successfully! 🎉')
}

const signUpFailure = () => {
  failMessage('You shall not pass 🧙‍♂️‍')
}

module.exports = {
  signUpSuccessful,
  signUpFailure
}
