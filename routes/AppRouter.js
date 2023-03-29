const Router = require('express').Router()
const userRouter = require('./userRouter')
const eventRouter = require('./eventRouter')
const orderRouter = require('./orderRouter')

Router.use('/users', userRouter)
Router.use('/events', eventRouter)
Router.use('/orders', orderRouter)

module.exports = Router
