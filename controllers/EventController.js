const { Event } = require('../models')
//const { Op } = require('sequelize')
const axios = require('axios')
require('dotenv').config()
const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET

const CreateEvent = async (req, res) => {
  try {
    let eventBody = {
      ...req.body
    }
    const newEvent = await Event.create(eventBody)
    res.send(newEvent)
  } catch (error) {
    throw error
  }
}

const FindEventFromDb = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.event_id)
    // console.log(event)
    if (event) {
      return res.json(event)
    } else {
      return false
    }
  } catch (error) {
    throw error
  }
}

const GetAllEvents = async (req, res) => {
  try {
    const response = await Event.findAll()
    res.send(response)
  } catch (error) {
    throw error
  }
}

const GetEvents = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.seatgeek.com/2/events?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    )
    console.log(response.data)
    return res.json(response.data)
  } catch (error) {
    throw error
  }
}

const GetEventById = async (req, res) => {
  try {
    const { event_id } = req.params
    const response = await axios.get(
      `https://api.seatgeek.com/2/events/${event_id}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    )

    return res.json(response.data)
  } catch (error) {
    throw error
  }
}

const SortEventsByDate = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.seatgeek.com/2/events?sort=datetime_local.desc&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    )

    return res.json(response)
  } catch (error) {
    throw error
  }
}

const FindEventsByCity = async (req, res) => {
  try {
    const { venue } = req.params
    const events = await axios.get(
      `https://api.seatgeek.com/2/events?venue.city=${venue}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    )
    return res.json(events)
  } catch (error) {
    throw error
  }
}

const FindEventsByCategory = async (req, res) => {
  try {
    const { SPORTS } = req.params
    // console.log(type)
    const events = await axios.get(
      `https://api.seatgeek.com/2/events?taxonomies.${SPORTS}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    )
    return res.json(events.data)
  } catch (error) {
    throw error
  }
}

const SearchEvents = async (req, res) => {
  try {
    const { search } = req.params
    const response = await axios.get(
      `https://api.seatgeek.com/2/events?q=${search}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    )
    return res.json(response.data)
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateEvent,
  GetEvents,
  GetAllEvents,
  GetEventById,
  SortEventsByDate,
  SearchEvents,
  FindEventsByCity,
  FindEventsByCategory,
  FindEventFromDb
}
