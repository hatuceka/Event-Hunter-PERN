import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
//import axios from 'axios'
import { GetEventById, CreateEvent, FindEventFromDb } from '../services/Event'
import { CreateOrder } from '../services/Order'
import Cart from './Cart'
import Login from './Login'

const EventDetails = ({ user }) => {
  const [eventDetails, setEventDetails] = useState({})
  //const [event_id, setEventId] = useState('')
  const [clicked, setClicked] = useState(false)

  // const addToCart = (event) => {
  //   let newCart = Cart
  //   newCart.push(event)
  //   setCart(newCart)
  //   let eventArray = newOrder.events
  //   eventArray.push(event_id)
  //   setNewOrder({...newOrder, events: eventArray})
  // }

  let { event_id } = useParams()
  const addToCart = async () => {
    await CreateOrder(user.id, event_id)
    console.log(user.id)
    setClicked(true)
  }

  // const addToCart = async () => {
  //   const order = {
  //     event_id: event.id

  //   }
  //   await CreateOrder(order)
  // }

  //let { event_id } = useParams()
  useEffect(() => {
    console.log(event_id)
    let isCancelled = false
    const fetchDetails = async () => {
      let details = await GetEventById(event_id)
      let eventInDb = false
      eventInDb = await FindEventFromDb(event_id)
      if (!isCancelled) {
        setEventDetails(details.data)
      }
      if (!eventInDb) {
        await CreateEvent({
          id: event_id,
          title: details.title,
          image: details.performers[0].image,
          type: details.type,
          datetime_local: details.datetime_local,
          venue: details.venue.name
        })
      }
    }

    fetchDetails()
    return () => {
      isCancelled = true
    }
  }, [event_id])
  if (eventDetails.title)
    return (
      <div>
        <h1>{eventDetails.title}</h1>
        <img src={eventDetails.performers[0].image} />
        <h2>{eventDetails.type}</h2>
        <h2>{eventDetails.datetime_local}</h2>
        <h2>
          {eventDetails.venue.city} {eventDetails.venue.state}{' '}
          {eventDetails.venue.name}
        </h2>
        <button onClick={addToCart}>Add to Cart</button>
        {user ? (
          <button>Go to Cart</button>
        ) : (
          <h2>Go to LOGIN to buy tickets!</h2>
        )}
      </div>
    )
}

export default EventDetails
