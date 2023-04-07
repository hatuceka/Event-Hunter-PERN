import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { GetEventById, CreateEvent, FindEventFromDb } from '../services/Event'
import { CreateOrder } from '../services/Order'
import Cart from './Cart'
import Login from './Login'
import { Link } from 'react-router-dom'

const EventDetails = ({ user, props, addToCart }) => {
  const [eventDetails, setEventDetails] = useState({})
  //const [event_id, setEventId] = useState('')
  // const [clicked, setClicked] = useState(false)

  let { event_id } = useParams()
  // const addToCart = async () => {
  //   await CreateOrder(user.id, event_id)
  //console.log(user.id)
  //setClicked(true)
  //  }

  //let { event_id } = useParams()
  //let event = FindEventFromDb(event_id)
  // event.id = parseInt(event_id)

  useEffect(() => {
    const fetchDetails = async () => {
      let details = await GetEventById(event_id)
      //   let eventInDb = await FindEventFromDb(event_id)
      setEventDetails(details.data)
      //   if (!eventInDb) {
      //     await CreateEvent({
      //       id: details.event_id,
      //       title: details.title,
      //       image: details.performers[0].image,
      //       type: details.type,
      //       datetime_local: details.datetime_local,
      //       venue: details.venue.name
      //     })
      //   }
    }
    fetchDetails()
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
        <Link to="/">Go back to hunt events</Link>

        {user ? (
          <button onClick={() => addToCart(eventDetails)}>Add to Cart</button>
        ) : (
          <h2>Go to LOGIN to buy tickets!</h2>
        )}
      </div>
    )
}

export default EventDetails
