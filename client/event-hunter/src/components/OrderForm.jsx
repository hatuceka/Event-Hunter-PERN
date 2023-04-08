import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const OrderForm = ({ setCart }) => {
  let navigate = useNavigate()

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
    navigate('/order-placed')
    setCart([])
    setOrderFormValues(initialState)
  }

  return (
    <div className="orderDiv">
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
        <button className="place" type="submit">
          Place Order
        </button>
      </form>
    </div>
  )
}

export default OrderForm
