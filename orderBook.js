function reconcileOrder(existingBook, incomingOrders) {

  if (existingBook.length === 0) {
    return [incomingOrders]
  }

  updatedBook = existingBook.concat([incomingOrders])
   
  let exBook = updatedBook[0]
  let inOrder = updatedBook[1]

  if (exBook.type !== inOrder.type && exBook.quantity === inOrder.quantity && exBook.price === inOrder.price) {
    return []
  }

  if (exBook.type !== inOrder.type && exBook.quantity !== inOrder.quantity && exBook.price === inOrder.price) {
    if (exBook.quantity - inOrder.quantity >= 1) {
      return [{
        type: 'buy',
        quantity: exBook.quantity - inOrder.quantity,
        price: exBook.price,
      }]
    } else if (inOrder.quantity - exBook.quantity >= 1) {
      return [{
        type: 'sell',
        quantity: inOrder.quantity - exBook.quantity,
        price: exBook.price,
      }]
    }
   
  }
  return updatedBook 
}


module.exports = reconcileOrder
