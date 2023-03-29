const { Order, User, Event } = require('../models')

const createOrder = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let eventId = parseInt(req.params.event_id)
    let orderBody = {
      user_id: userId,
      event_id: eventId,
      ...req.body
    }
    let order = await Order.create(orderBody)
    res.send(order)
  } catch (error) {
    throw error
  }
}

module.exports = {
  createOrder
}
