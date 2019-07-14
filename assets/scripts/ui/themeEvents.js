
// $background: #aad2d8;
// $border-color: darken($background, 10%);
// $border-thickness: 10px;
// $piece-color: #fff;
// $piece-o: #748e99;
// $piece-x: #373e49;
// $text-color: $piece-x;
// $form-color: $text-color;
// $white: #f7fcfc;
// $gray: #97a6af;
// $smol-headers: darken($gray, 20%);

const pieceStore = require('../game/pieceStore')

const changeToGrape = () => {
  $('body').css('background-color', '#e5caea')
  $('h3').css('color', '#c4a7be')
  $('.x-logo').css('color', '#4d1d49')

  // piece colors
  pieceStore.xColor = '#4d1d49'
  pieceStore.oColor = '#f7eff8'

  // headers
  $('.first-header').css('color', '#4d1d49')
  $('.second-header').css('color', '#4d1d49')
  $('h1').css('color', '#4d1d49')
  $('.btn').css('background', '#4d1d49')
  $('.main-message').css('color', '#4d1d49')
  $('.btn').css('color', '#f7eff8')

  $('button').css('background-color', '#4d1d49')
  $('button').css('color', '#f7eff8')
  $('input').css('background-color', '#f9f6f8')
  $('.close').css('background', 'white')
  $('.close').css('color', '#aaa')

  $('.cell').css('border-bottom-color', '#c992d4')
  $('.cell').css('border-right-color', '#c992d4')
}

const changeToStrawberry = () => {

}

const changeToLime = () => {

}

const changeToBlueberry = () => {

}

module.exports = {
  changeToGrape,
  changeToStrawberry,
  changeToLime,
  changeToBlueberry
}
