import User from './api'

export const CreateEvent = async () => {
  try {
    const response = await User.post('/api/events/create-event')
    return response
  } catch (error) {
    throw error
  }
}

export const FindEventFromDb = async (event_id) => {
  try {
    const response = await User.get(`/api/events/from-database/${event_id}`)
    return response
  } catch (error) {
    throw error
  }
}

export const GetEvents = async () => {
  try {
    const response = await User.get('/api/events')
    return response
  } catch (error) {
    throw error
  }
}

export const GetEventById = async (event_id) => {
  try {
    console.log(event_id)
    const response = await User.get(`/api/events/event/${event_id}`)
    return response
  } catch (error) {
    throw error
  }
}

export const SortEventByDate = async () => {
  try {
    const response = await User.get(`/api/events/SortEventByDate/sort-by-date`)
    return response
  } catch (error) {
    throw error
  }
}

export const FindEventsByCity = async (location) => {
  try {
    const response = await User.get(`/api/events/FindEventsByCity/${location}`)
    return response
  } catch (error) {
    throw error
  }
}

export const findEventsByCategory = async (SPORTS) => {
  try {
    //const { type } = req.params
    const response = await User.get(`/api/events/category/${SPORTS}`)
    return response
  } catch (error) {
    throw error
  }
}

export const SearchEvents = async (search) => {
  try {
    console.log('searchTerm', search)
    const response = await User.get(`/api/events/search/${search}`)
    return response
  } catch (error) {
    console.log('Events could not be found')
  }
}
