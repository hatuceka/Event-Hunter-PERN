import axios from 'axios'
import { useEffect } from 'react'
import EventCard from '../components/EventCard'

const Cart = ({
  cart,
  handleChange,
  addOrder,
  newOrder,
  setCart,
  setNewOrder,
  orders,
  setOrders,
  getAllOrders
}) => {
  const handleSubmit = (e) => {
    addOrder(e)
  }

  useEffect(() => {
    getAllOrders()
  }, [])

  return (
    <div>
      <div className="eventsInCart">
        {cart.map((event) => (
          <div>{<EventCard event={event} />}</div>
        ))}
      </div>
    </div>
  )
}

export default Cart
