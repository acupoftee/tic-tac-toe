'use strict'

const util = require('../utils/util')
const formArray = ['.sign-in-box', '.sign-up-box', '.change-password-box']

const getSignUpForm = event => {
  util.showItems('.sign-up-box')
  util.hideItems('.opening')
}

const getSignInForm = event => {
  util.showItems('.sign-in-box')
  util.hideItems('.opening')
}

const getPasswordForm = event => {
  util.showItems('.change-password-box')
  util.hideItems('.signed-in')
}

const getGamePage = event => {
  event.preventDefault()
  util.hideItems('.change-password-box')
  util.showItems('.signed-in')
  $('form').trigger('reset')
}

const getLandingPage = event => {
  event.preventDefault()
  const activeClass = formArray.find(form => $(form).hasClass('active'))
  util.hideItems(activeClass)
  util.hideItems('.second-header')
  util.showItems('.opening')
  $('form').trigger('reset')
}

module.exports = {
  getSignUpForm,
  getSignInForm,
  getPasswordForm,
  getGamePage,
  getLandingPage
}