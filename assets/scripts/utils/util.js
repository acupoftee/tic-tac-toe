'use strict'

const hideItems = itemName => {
  $(itemName).removeClass('active')
  $(itemName).addClass('hidden')
}

const showItems = itemName => {
  $(itemName).removeClass('hidden')
  $(itemName).addClass('active')
}

module.exports = {
  hideItems,
  showItems
}
