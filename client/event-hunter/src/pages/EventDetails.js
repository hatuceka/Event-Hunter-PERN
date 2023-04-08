import '../style/detail.css'
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

  let { event_id } = useParams()

  useEffect(() => {
    const fetchDetails = async () => {
      let details = await GetEventById(event_id)

      setEventDetails(details.data)
    }
    fetchDetails()
  }, [event_id])

  if (eventDetails.title)
    return (
      <div className="detailDiv">
        <img className="eventImage" src={eventDetails.performers[0].image} />
        <div className="detailInfo">
          <h1 className="detailTitle">
            <span className="span">Name:</span> {eventDetails.title}
          </h1>
          <h2 className="detailTitle">
            <span className="span">Type:</span> {eventDetails.type}
          </h2>
          <h2 className="detailTitle">
            <span className="span"> Date and Time:</span>{' '}
            {eventDetails.datetime_local}
          </h2>
          <h2 className="detailTitle">
            <span className="span">Place:</span>
            {eventDetails.venue.city} {eventDetails.venue.state}{' '}
            {eventDetails.venue.name}
          </h2>
        </div>
        <div className="detailBtns">
          {user ? (
            <button className="add" onClick={() => addToCart(eventDetails)}>
              Add to Cart
            </button>
          ) : (
            <h2 className="detailEmpty">
              Go to{' '}
              <Link className="goBack" to="/login">
                LOGIN
              </Link>{' '}
              to buy tickets!
            </h2>
          )}
          <Link className="goBack" to="/">
            Go Back to Hunt Events
          </Link>
        </div>
      </div>
    )
}

export default EventDetails
