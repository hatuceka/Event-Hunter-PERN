import '../style/cart.css'

import { useState, useEffect } from 'react'

import EventCard from '../components/EventCard'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import OrderForm from '../components/OrderForm'

const Cart = ({
  user,
  cart,
  setCart,
  handleChange,
  handleDelete,
  addToCart,
  addOrder,

  getAllOrders,
  orderCount,
  setOrderCount
}) => {
  const handleSubmit = (e) => {
    addOrder(e)
  }

  const [events, setEvents] = useState({})
  const [allEvents, setAllEvents] = useState([])
  const eventDetails = allEvents.find((event) => {})

  useEffect(() => {
    setEvents(eventDetails)

    getAllOrders()
  }, [cart])

  return (
    <div className="cartBody">
      <div className="eventsInCart">
        {cart.map((event) => (
          <div key={event.id}>
            {<EventCard event={event} />}
            <br></br>
            <button
              className="delete"
              onClick={() => {
                handleDelete(event.id)
              }}
            >
              <FontAwesomeIcon icon={faTrash} /> Delete
            </button>
          </div>
        ))}
      </div>
      {cart.length !== 0 ? (
        <OrderForm user={user} cart={cart} setCart={setCart} />
      ) : (
        <h1 className="empty">Your cart is empty!</h1>
      )}
    </div>
  )
}

export default Cart
