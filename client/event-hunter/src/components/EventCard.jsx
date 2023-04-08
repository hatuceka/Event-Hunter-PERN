import '../style/home.css'

import { Link } from 'react-router-dom'

const EventCard = ({ event }) => {
  return (
    <div classsName="card">
      <Link className="titleLink" to={`events/${event.id}`}>
        <div>
          <p className="eventTitle">{event.title}</p>
        </div>
        <img className="eventImg" src={event.performers[0].image} />
      </Link>
    </div>
  )
}

export default EventCard
