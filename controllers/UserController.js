const { User } = require('../models')
const middleware = require('../middleware')

const GetUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const UserDetails = async (req, res) => {
  try {
    const userDetails = await User.findByPk(req.params.user_id)
    res.send(userDetails)
  } catch (error) {
    throw error
  }
}

const RegisterUser = async (req, res) => {
  console.log(req.body)
  try {
    const { firstName, lastName, email, password, location } = req.body
    //console.log(req.body)
    let passwordDigest = await middleware.hashPassword(password)
    const user = await User.create({
      firstName,
      lastName,
      email,
      passwordDigest,
      location
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({
      where: { email: email },
      raw: true
    })
    let matched = await middleware.comparePassword(
      user.passwordDigest,
      password
    )
    if (matched) {
      let payload = {
        id: user.id,
        email: user.email
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'IncorrectPassword' })
  } catch (error) {
    console.log(error)
    res
      .status(401)
      .send({ status: 'Error', msg: 'An error has occurred on Login!' })
  }
}

const checkSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body
    const user = await User.findByPk(req.params.user_id)
    let matched = await middleware.comparePassword(
      user.passwordDigest,
      oldPassword
    )
    if (matched) {
      let passwordDigest = await middleware.hashPassword(newPassword)
      await user.update({ passwordDigest })
      let payload = {
        id: user.id,
        email: user.email
      }
      return res.send({ status: 'Password Updated!', user: payload })
    }
    res.status(401).send({ status: 'Error', msg: 'OldPassword did not match!' })
  } catch (error) {
    console.log(error)
    res.status(401).send({
      status: 'Error',
      msg: 'An error has occurred updating password!'
    })
  }
}

const UpdateUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let updateUser = await User.update(req.body, {
      where: { id: userId },
      returning: true
    })
    res.send(updateUser)
  } catch (error) {
    throw error
  }
}

const DeleteUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    await User.destroy({ where: { id: userId } })
    res.send({ msg: `Deleted User with ID number ${userId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetUsers,
  UserDetails,
  RegisterUser,
  LoginUser,
  checkSession,
  UpdatePassword,
  UpdateUser,
  DeleteUser
}
