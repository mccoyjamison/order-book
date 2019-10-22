const reconcileOrder = require('./orderBook')
const existingBook = []
const incomingOrder = { type: 'sell', quantity: 10, price: 6150 }
​
const updatedBook = reconcileOrder(existingBook, incomingOrder)
​
console.log(updatedBook)