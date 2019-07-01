'use strict'

const config = require('../config')
const store = require('../store')

const createGame = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    data: '{}',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = gameData => {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game,
    data: gameData,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getGame = id => {
  return $.ajax({
    url: config.apiUrl + '/games/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getAllGames = () => {
  return $.ajax({
    url: config.apiUrl + '/games/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createGame,
  updateGame,
  getGame,
  getAllGames
}
