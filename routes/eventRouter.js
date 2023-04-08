const Router = require('express').Router()
const controller = require('../controllers/EventController')

Router.get('/', controller.GetEvents)
Router.get('/find-all', controller.GetAllEvents)
Router.post('/create-event', controller.CreateEvent)
Router.get('/event/:event_id', controller.GetEventById)
Router.get('/sort-by-date', controller.SortEventsByDate)
Router.get('/city/:location', controller.FindEventsByCity)
//Router.get('/category/:SPORTS', controller.FindEventsByCategory)
Router.get('/search/:search', controller.SearchEvents)
Router.get('/from-database/:event_id', controller.FindEventFromDb)

module.exports = Router
