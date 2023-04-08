import '../style/home.css'

import { Link } from 'react-router-dom'

const EventCard = ({ event }) => {
  return (
    <div className="card">
      <Link className="titleLink" to={`events/${event.id}`}>
        <img className="eventImg" src={event.performers[0].image} />
        <div>
          <p className="eventTitle">{event.title}</p>
        </div>
      </Link>
    </div>
  )
}

export default EventCard
