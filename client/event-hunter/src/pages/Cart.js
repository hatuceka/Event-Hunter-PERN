import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import EventCard from '../components/EventCard'
import { CreateOrder } from '../services/Order'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import OrderForm from '../components/OrderForm'

const Cart = ({
  user_id,
  cart,
  handleChange,
  addOrder,
  newOrder,
  setCart,
  setNewOrder,
  orders,
  setOrders,
  getAllOrders,
  orderCount,
  setOrderCount
}) => {
  const handleSubmit = (e) => {
    addOrder(e)
  }

  let { event_id } = useParams()
  const [events, setEvents] = useState({})
  const [allEvents, setAllEvents] = useState([])
  const eventDetails = allEvents.find((event) => {
    return event.id === parseInt(event_id)
  })
  //console.log(event_id)

  // const placeOrder = async (user_id, event_id) => {
  //   let place = await CreateOrder(user_id, event_id)
  //   //console.log(place)
  //   setNewOrder(place.data)
  //   // console.log(place)
  // }
  // //placeOrder()

  useEffect(() => {
    setEvents(eventDetails)
    getAllOrders()
  }, [])

  const handleDelete = (orderId) => {
    const updatedCart = cart.filter((order) => order.id !== orderId)
    // setOrderCount(cart.length)
    setCart(updatedCart)
  }

  // useEffect(() => {
  //   getAllOrders()
  // }, [])

  return (
    <div>
      <div className="eventsInCart">
        {cart.map((event) => (
          <div key={event.id}>
            {<EventCard event={event} />}
            <br></br>
            <button onClick={() => handleDelete(event.id)}>
              <FontAwesomeIcon icon={faTrash} /> Delete
            </button>
          </div>
        ))}
      </div>
      <button>{<OrderForm user_id={user_id} event_id={event_id} />}</button>
    </div>
  )
}

export default Cart
