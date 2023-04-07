import User from './api'

export const LoginUser = async (data) => {
  try {
    const res = await User.post('/api/users/login', data)
    localStorage.setItem('token', res.data.token)
    localStorage.setItem('userId', res.data.user.id)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const RegisterUser = async (data) => {
  try {
    const res = await User.post('/api/users/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const checkSession = async () => {
  try {
    const res = await User.get('/api/users/session')
    return res.data
  } catch (error) {
    throw error
  }
}

// export const UserDetails = async (req) => {
//   let userId = parseInt(req.params.user_id)
//   try {
//     const res = await User.get(`/api/users/details/${userId}`)
//     return res.data
//   } catch (error) {
//     throw error
//   }
// }

// export const UpdateUser = async (user_id, userDet) => {
//   const res = await User.put(`/api/users/update_user/${user_id}`, userDetails)
//   return res.data
// }
