// import { useState, useEffect } from 'react'
// import { findEventsByCategory } from '../services/Event'
// import EventCard from '../components/EventCard'

// const Sports = () => {
//   const [eventList, setEventList] = useState()
//   const [sports, setSports] = useState([])

//   useEffect(() => {
//     const fetchEvents = async (SPORTS) => {
//       let events = await findEventsByCategory(SPORTS)
//       setEventList(events.data.events)
//     }
//     fetchEvents()
//   }, [])

//   return (
//     <div>
//       {sports.map((event) => (
//         <EventCard event={event} key={event.id} />
//       ))}
//     </div>
//   )
// }

// export default Sports
