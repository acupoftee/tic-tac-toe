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
  util.hideItems('.settings-form')
  if ($('.gameboard').hasClass('active')) {
    util.hideItems('.gameboard')
    util.showItems('.logo')
  }
}

const getSettingsForm = event => {
  util.hideItems('.signed-in')
  util.showItems('.settings-form')
  util.hideItems('.themes')
}

const getThemes = event => {
  util.showItems('.themes')
}

const getGamePage = event => {
  event.preventDefault()
  util.hideItems('.change-password-box')
  util.showItems('.signed-in')
  $('form').trigger('reset')
}

const getHome = event => {
  event.preventDefault()
  if ($('.settings-form').hasClass('active')) {
    util.hideItems('.settings-form')
  } else {
    util.hideItems('.gameboard')
    util.hideItems('.in-game')
    util.hideItems('.game-finished')
    util.hideItems('.x')
    util.hideItems('.o')
  }

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
  getHome,
  getSettingsForm,
  getThemes
}
