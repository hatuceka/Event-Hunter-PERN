const Router = require('express').Router()
const userRouter = require('./userRouter')
const eventRouter = require('./eventRouter')
//const ticketRouter = require('./ticketRouter')

Router.use('/users', userRouter)
Router.use('/events', eventRouter)
//Router.use('/tickets', ticketRouter)

module.exports = Router
