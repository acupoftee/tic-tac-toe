'use strict'

const gameBoard = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
const rows = 3
// let scoreX = 0
// let scoreO = 0

const addPiece = (index, piece) => {
  gameBoard[index] = piece
}

const checkWin = () => {
  // console.log('checkDiagonal', checkDiagonal())
  // console.log('checkHorizontal', checkHorizontal())
  // console.log('checkVertical', checkVertical())
  return checkDiagonal() || checkHorizontal() || checkVertical() || checkDiagonalBackwards()
}

const checkDiagonal = () => {
  const first = transpose(0, 0, rows)
  const second = transpose(1, 1, rows)
  const third = transpose(2, 2, rows)
  return gameBoard[first] === gameBoard[second] && gameBoard[first] === gameBoard[third]
}

const checkDiagonalBackwards = () => {
  const first = transpose(0, 2, rows)
  const second = transpose(1, 1, rows)
  const third = transpose(2, 0, rows)
  return gameBoard[first] === gameBoard[second] && gameBoard[first] === gameBoard[third]
}
const checkHorizontal = () => {
  for (let i = 0; i < rows; i++) {
    const first = transpose(i, 0, rows)
    const second = transpose(i, 1, rows)
    const third = transpose(i, 2, rows)
    if (gameBoard[first] === gameBoard[second] && gameBoard[first] === gameBoard[third]) {
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
    if (gameBoard[first] === gameBoard[second] && gameBoard[first] === gameBoard[third]) {
      return true
    }
  }
  return false
}

const transpose = (row, col, numRows) => {
  return row * numRows + col
}

module.exports = {
  gameBoard,
  // scoreX,
  // scoreO,
  addPiece,
  checkWin
}
