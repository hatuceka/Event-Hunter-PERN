const Router = require('express').Router()
const controller = require('../controllers/OrderController')
const middleware = require('../middleware')

Router.get('/', controller.GetOrders)
Router.get('/:order_id', controller.GetOrderDetails)
Router.get('/:user_id/orders', controller.GetOrdersByUser)
Router.post(
  '/user/:user_id/event/:event_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateOrder
)
Router.put(
  '/:order_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateOrder
)
Router.delete(
  '/order_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CancelOrder
)

module.exports = Router
