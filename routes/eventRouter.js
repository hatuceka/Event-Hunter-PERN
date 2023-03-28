const Router = require('express').Router()
const controller = require('../controllers/EventController')

Router.get('/', controller.GetEvents)
Router.get('/:event_id', controller.GetEventById)
Router.get('/sort-by-date', controller.SortEventsByDate)
Router.get('/:location', controller.FindEventsByCity)
Router.get('/category', controller.FindEventsByCategory)
Router.get('/:search', controller.SearchEvents)

module.exports = Router
