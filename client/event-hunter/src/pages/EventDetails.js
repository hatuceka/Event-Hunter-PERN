import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
//import axios from 'axios'
import { GetEventById } from '../services/Event'

const EventDetails = () => {
  const [eventDetails, setEventDetails] = useState({})

  let { event_id } = useParams()
  console.log(event_id)
  useEffect(() => {
    let isCancelled = false
    const fetchDetails = async () => {
      let details = await GetEventById(event_id)
      if (!isCancelled) {
        setEventDetails(details.data)
      }
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
        <button>Add to Cart</button>
      </div>
    )
}

export default EventDetails
