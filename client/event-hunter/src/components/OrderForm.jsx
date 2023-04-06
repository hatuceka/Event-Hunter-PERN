import { useState } from 'react'
//import axios from 'axios'
import { useNavigate } from 'react-router-dom'
//import { CreateOrder } from '../services/Order'

const OrderForm = () => {
  let navigate = useNavigate()
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

  const handleSubmit = () => {
    // e.preventDefault()
    // const token = localStorage.getItem('token')
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}`
    //   }
    // }
    navigate('/order-placed')
    // await axios.post(
    //   `/api/orders/user/${user.id}/event/${event_id}`,
    //   //await CreateOrder(
    //   {
    //     event_id: event_id,
    //     user_id: user.id,
    //     name: orderFormValues.name,
    //     cardNumber: orderFormValues.cardNumber,
    //     address: orderFormValues.address
    //   },
    //   config
    // )
    setOrderFormValues(initialState)
  }
  //console.log(user.id)

  return (
    <div>
      <form className="oderForm" onSubmit={handleSubmit}>
        <div>
          <input
            className="input"
            name="name"
            type="text"
            value={orderFormValues.name}
            placeholder="Full Name"
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
            placeholder="Address"
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
