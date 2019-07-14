const pieceStore = require('../game/pieceStore')

const changeToGrape = event => {
  changeTheme('#e5caea', '#4d1d49', '#f7eff8', '#c992d4', '#c4a7be', '#e6cceb')
}

const changeToLime = () => {
  changeTheme('#d6eaa2', '#234d20', '#fbfdf6', '#c0da76', '#77ab59', '#d8eba6')
}

const changeToStrawberry = () => {
  changeTheme('#f0c1c8', '#cd334c', '#fbf0f2', '#e293a1', '#e8a1ac', '#f0c4ca')
}

const changeToBlueberry = () => {
  changeTheme('#aad2d8', '#373e49', '#f7fcfc', '#8fc3cb', '#728692', '#aed4d9')
}

// https://stackoverflow.com/a/21051467
const addHover = (selector, color1, color2) => {
  $(selector).hover(event => {
    $(selector).css('color', event.type === 'mouseenter' ? color1 : color2)
  })
}

const changeTheme = (background, main, white, cellBoarder, heading, hover) => {
  $('body').css('background-color', background)
  $('h3').css('color', heading)
  $('.x-logo').css('color', main)

  // piece colors
  pieceStore.xColor = main
  pieceStore.oColor = white

  // headers
  $('.first-header').css('color', main)
  $('.second-header').css('color', main)
  $('h1').css('color', main)
  $('.btn').css('background', main)
  $('.main-message').css('color', main)
  $('.btn').css('color', white)

  $('button').css('background-color', main)
  $('button').css('color', white)
  $('.close').css('background', 'white')
  $('.close').css('color', '#aaa')

  $('.cell').css('border-bottom-color', cellBoarder)
  $('.cell').css('border-right-color', cellBoarder)

  // adds individual hover updates (need to improve this)
  addHover('#sign-up-button', hover, white)
  addHover('#sign-in-button', hover, white)
  addHover('.modal-footer button', hover, white)
  addHover('#sign-up', hover, white)
  addHover('#sign-in', hover, white)
  addHover('#change-password', hover, white)
  addHover('#sign-out', hover, white)
  addHover('.create-game', hover, white)
  addHover('#get-games', hover, white)
  addHover('#settings', hover, white)
  addHover('#home', hover, white)
  addHover('#new-password', hover, white)
  addHover('#new-theme', hover, white)
  addHover('#return', hover, white)
  addHover('.back', hover, white)
  addHover('.game-back', hover, white)
}

module.exports = {
  changeToGrape,
  changeToStrawberry,
  changeToLime,
  changeToBlueberry
}
