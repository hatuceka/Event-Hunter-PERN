const { Order, User, Event } = require('../models')

const CreateOrder = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    //let eventId = parseInt(req.params.event_id)
    let orderBody = {
      user_id: userId,
      // event_id: eventId,
      ...req.body
    }
    let order = await Order.create(orderBody)
    res.send(order)
  } catch (error) {
    throw error
  }
}

const GetOrders = async (req, res) => {
  try {
    const orders = await Order.findAll()
    res.send(orders)
  } catch (error) {
    throw error
  }
}

const GetOrderDetails = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.order_id)
    res.send(order)
  } catch (error) {
    throw error
  }
}

const GetOrdersByUser = async (req, res) => {
  try {
    const userOrders = await User.findAll({
      where: { user_id: req.params.user_id },
      include: {
        model: Event,
        as: 'events',
        attributes: ['title']
      }
    })
    res.send(userOrders)
  } catch (error) {
    throw error
  }
}

const UpdateOrder = async (req, res) => {
  try {
    let orderId = parseInt(req.params.order_id)
    let updatedOrder = await Order.update(req.body, {
      where: { id: orderId },
      returning: true
    })
    res.send(updatedOrder)
  } catch (error) {
    throw error
  }
}

const CancelOrder = async (req, res) => {
  try {
    let orderId = parseInt(req.params.order_id)
    await Order.destroy({
      where: {
        id: orderId
      }
    })
    res.send({
      msg: `Order with ID number ${orderId} has been successfully deleted!`
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateOrder,
  GetOrders,
  GetOrderDetails,
  GetOrdersByUser,
  UpdateOrder,
  CancelOrder
}
