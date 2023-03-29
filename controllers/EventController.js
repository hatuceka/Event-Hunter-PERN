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

const GetEvents = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.seatgeek.com/2/events?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    )
    res.send(response)
    return res.status(200).json(response)
  } catch (error) {
    throw error
  }
}

const GetEventById = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.seatgeek.com/2/events/${EVENT_ID}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    )
    res.send(response)
    return res.status(200).json(response)
  } catch (error) {
    throw error
  }
}

const SortEventsByDate = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.seatgeek.com/2/events?sort=datetime_local.desc&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    )
    res.send(response)
    return res.status(200).json(response)
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
    return res.status(200).json(events)
  } catch (error) {
    throw error
  }
}

const FindEventsByCategory = async (req, res) => {
  try {
    const { type } = req.params
    const events = await axios.get(
      `https://api.seatgeek.com/2/events?taxonomies.name=${type}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    )
    return res.status(200).json(events)
  } catch (error) {
    throw error
  }
}

const SearchEvents = async (req, res) => {
  try {
    const { search } = req.params
    const events = await axios.get(
      `https://api.seatgeek.com/2/events?q=${search}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    )
    return res.status(200).json(events)
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateEvent,
  GetEvents,
  GetEventById,
  SortEventsByDate,
  SearchEvents,
  FindEventsByCity,
  FindEventsByCategory
}
