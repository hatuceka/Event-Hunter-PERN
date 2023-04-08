import { GetEvents } from '../services/Event'
import { SearchEvents } from '../services/Event'
import SearchBar from '../components/SearchBar'
import { useEffect, useState } from 'react'
import EventCard from '../components/EventCard'
import Sports from '../components/Sports'

const Home = () => {
  const [eventList, setEventList] = useState()
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      let events = await GetEvents()
      setEventList(events.data.events)
    }
    fetchData()
  }, [])

  const onSubmit = async (event) => {
    event.preventDefault()
    console.log(event.target)
    let res = await SearchEvents(search)
    setSearchResults(res.data.events)
    setSearch('')
    toggleSearched(true)
  }

  const handleChange = (event) => {
    console.log(event.target)
    setSearch(event.target.value)
  }

  const handleBack = () => {
    toggleSearched(false)
    setSearchResults([])
  }

  return (
    <div className="cartBody">
      <SearchBar onSubmit={onSubmit} value={search} onChange={handleChange} />
      {searched && searchResults.length === 0 && (
        <div className="cartBody">
          <p className="noResult">There is no matching result!</p>
          <button className="goBack" onClick={handleBack}>
            Go Back to Hunt Events
          </button>
        </div>
      )}
      <h2 className="top">Top Events</h2>
      {!searched && (
        <div>
          <div className="eventList">
            {eventList && (
              <div className="container">
                {eventList.map((event) => (
                  <EventCard event={event} key={event.id} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      {searchResults.length > 0 && (
        <div className="eventList">
          <div className="container">
            {searchResults.map((event) => (
              <EventCard event={event} key={event.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
