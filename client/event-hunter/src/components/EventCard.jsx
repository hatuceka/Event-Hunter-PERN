import { Link } from 'react-router-dom'

const EventCard = ({ event }) => {
  return (
    <Link to={`events/${event.id}`}>
      <div>
        <p>{event.title}</p>
      </div>
      <img src={event.performers[0].image} />
    </Link>
  )
}

export default EventCard
