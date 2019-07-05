'use strict'

let gameBoard = ['', '', '', '', '', '', '', '', '']
const rows = 3
// let scoreX = 0
// let scoreO = 0

const resetGame = () => {
  $('.cell').text('')
  $('.cell').removeClass('letter-ani')
  gameBoard = ['', '', '', '', '', '', '', '', '']
  $('.main-message').text('X\'s turn')
  $('.message').text('')
}

const addPiece = (index, piece) => {
  gameBoard[index] = piece
}

const checkWin = () => {
  return checkDiagonal() || checkHorizontal() || checkVertical() || checkDiagonalBackwards()
}

const checkDiagonal = () => {
  const first = transpose(0, 0, rows)
  const second = transpose(1, 1, rows)
  const third = transpose(2, 2, rows)
  return !isAllBlank(first, second, third) && isEqual(first, second, third)
}

const checkDiagonalBackwards = () => {
  const first = transpose(0, 2, rows)
  const second = transpose(1, 1, rows)
  const third = transpose(2, 0, rows)
  return !isAllBlank(first, second, third) && isEqual(first, second, third)
}
const checkHorizontal = () => {
  for (let i = 0; i < rows; i++) {
    const first = transpose(i, 0, rows)
    const second = transpose(i, 1, rows)
    const third = transpose(i, 2, rows)
    if (!isAllBlank(first, second, third) && isEqual(first, second, third)) {
      return true
    }
  }
  return false
}

const checkVertical = () => {
  for (let i = 0; i < rows; i++) {
    const first = transpose(0, i, rows)
    const second = transpose(1, i, rows)
    const third = transpose(2, i, rows)
    if (!isAllBlank(first, second, third) && isEqual(first, second, third)) {
      return true
    }
  }
  return false
}

const isAllBlank = (first, second, third) => {
  return gameBoard[first] === '' && gameBoard[second] === '' && gameBoard[third] === ''
}

const isEqual = (first, second, third) => {
  return gameBoard[first] === gameBoard[second] && gameBoard[second] === gameBoard[third]
}
const isFull = () => {
  return gameBoard.every(piece => piece === 'X' || piece === 'O')
}

const transpose = (row, col, numRows) => {
  return row * numRows + col
}

module.exports = {
  gameBoard,
  isFull,
  addPiece,
  checkWin,
  resetGame
}
