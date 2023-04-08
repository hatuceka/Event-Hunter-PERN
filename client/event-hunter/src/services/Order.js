import User from './api'

export const GetOrders = async () => {
  try {
    const response = await User.get(`/api/orders/GetOrders`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const GetOrderDetails = async (order_id) => {
  try {
    const response = await User.get(`/api/orders/GetOrderDetails/${order_id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const GetOrdersByUser = async (user_id) => {
  try {
    const response = await User.get(`/api/orders/GetOrdersByUser${user_id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const UpdateOrder = async (order_id) => {
  try {
    const response = await User.put(`/api/orders/UpdateOrder/${order_id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const CancelOrder = async (order_id) => {
  try {
    const response = await User.delete(`/api/orders/CancelOrder/${order_id}`)
    return response.data
  } catch (error) {
    throw error
  }
}
