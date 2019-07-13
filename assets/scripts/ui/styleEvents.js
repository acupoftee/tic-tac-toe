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
  if ($('.gameboard').hasClass('active')) {
    util.hideItems('.gameboard')
    util.showItems('.logo')
  }
}

const getGamePage = event => {
  event.preventDefault()
  util.hideItems('.change-password-box')
  util.showItems('.signed-in')
  $('form').trigger('reset')
}

const getHome = event => {
  event.preventDefault()
  util.hideItems('.gameboard')
  util.hideItems('.in-game')
  util.hideItems('.game-finished')
  util.hideItems('.x')
  util.hideItems('.o')

  util.showItems('.signed-in')
  util.showItems('.logo')
  util.showItems('.first-header')
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
  getLandingPage,
  getHome
}
