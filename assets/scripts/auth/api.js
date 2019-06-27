'use strict'

const config = require('../config')
// const store = require('../store')

const signUp = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    data: formData,
    method: 'POST'
  })
}

module.exports = {
  signUp
}
