const Router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

Router.get('/', controller.GetUsers)
Router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.checkSession
)
Router.get('/details/:user_id', controller.UserDetails)
Router.post('/register', controller.RegisterUser)
Router.post('/login', controller.LoginUser)
Router.put(
  '/update_password/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePassword
)
Router.delete(
  '/delete/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteUser
)
Router.put(
  '/update_user/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateUser
)

module.exports = Router
