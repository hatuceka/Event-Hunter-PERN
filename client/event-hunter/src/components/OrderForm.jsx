import { useState } from 'react'
import { CreateOrder } from '../services/Order'

const OrderForm = ({ user, event_id }) => {
  //console.log(user_id)
  //console.log(event_id)
  const initialState = {
    name: '',
    cardNumber: '',
    address: ''
  }

  const [orderFormValues, setOrderFormValues] = useState(initialState)

  const handleChange = (e) => {
    e.preventDefault()
    setOrderFormValues({ ...orderFormValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = localStorage.getItem('token')
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    await CreateOrder(
      {
        event_id: event_id,
        user_id: user.id,
        name: orderFormValues.name,
        cardNumber: orderFormValues.cardNumber,
        address: orderFormValues.address
      },
      config
    )
    setOrderFormValues(initialState)
  }

  return (
    <div>
      <form className="oderForm" onSubmit={handleSubmit}>
        <div>
          <input
            className="input"
            name="name"
            type="text"
            value={orderFormValues.name}
            placeholder="full name"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <input
            className="input"
            name="cardNumber"
            type="text"
            value={orderFormValues.cardNumber}
            placeholder="Card Number"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <input
            className="input"
            name="address"
            type="text"
            value={orderFormValues.address}
            placeholder="address"
            onChange={handleChange}
          ></input>
        </div>
        <button className="submit" type="submit">
          Place Order
        </button>
      </form>
    </div>
  )
}

export default OrderForm
