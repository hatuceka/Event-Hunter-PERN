import { GetEvents } from '../services/Event'
import { SearchEvents } from '../services/Event'
import SearchBar from '../components/SearchBar'
import { useEffect, useState } from 'react'
import EventCard from '../components/EventCard'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const location = useLocation()

  // const { query } = location.state
  const [eventList, setEventList] = useState()
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [search, setSearch] = useState(location.state?.query || '')

  // if (search !== location.state.query) {
  //   setSearch(location.state.query)
  // }

  useEffect(() => {
    const fetchData = async () => {
      if (searched) {
        let events = await SearchEvents(`${search}`)

        setSearchResults(events.data)
        setSearch('')
      } else {
        let events = await GetEvents()
        setEventList(events.data.events)
      }
    }
    fetchData()
  }, [searched, search])

  const handleSearch = (query) => {
    setSearch(query)
    toggleSearched(true)
  }

  const handleBack = () => {
    toggleSearched(false)
    setSearchResults([])
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {searched && searchResults.length === 0 && (
        <div>
          <p className="noResult">There is no matching result</p>
          <button className="goBack" onClick={handleBack}>
            Back to Home
          </button>
        </div>
      )}

      {!searched && (
        <div>
          <div className="eventList">
            {eventList && (
              <div>
                {eventList.map((event) => (
                  <EventCard event={event} key={event.id} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      {searchResults.length > 0 && (
        <div>
          <h1 className="result">Search Results</h1>
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
