import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import UserProfile from './pages/UserProfile'
import Cart from './pages/Cart'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import SignIn from './pages/SignIn'
import Sports from './components/Sports'
import EventDetails from './pages/EventDetails'
import OrderPlaced from './pages/OrderPlaced.js'
import UpdateProfile from './pages/UpdateProfile'
import DeleteProfile from './pages/DeleteProfile'
import DeleteSuccess from './pages/DeleteSuccess'
// import ChangePassword from './pages/ChangePassword'

import Nav from './components/Nav'
import { BASE_URL } from './services/api'
import axios from 'axios'
import { checkSession } from './services/Auth'
import { GetEvents } from './services/Event'

const App = () => {
  let navigate = useNavigate()

  const [user, setUser] = useState(null)
  const [allUsers, setAllUsers] = useState(null)
  const [orders, setOrders] = useState([])
  const [cart, setCart] = useState([])
  const [newOrder, setNewOrder] = useState({
    events: []
  })
  const [events, setEvents] = useState([])
  const [showing, setShowing] = useState(false)

  const addOrder = async (e) => {
    e.preventDefault()
    let response = await axios.post(
      'http://localhost:3001/api/orders',
      newOrder
    )
    let currentOrders = orders
    currentOrders.push(response.data.order)
    setOrders(currentOrders)
    setNewOrder({ ...newOrder, events: [] })

    setCart([])
  }

  const handleChange = (e) => {
    setNewOrder({ ...newOrder, [e.target.id]: e.target.value })
  }

  const addToCart = (event) => {
    let newCart = cart

    newCart.push(event)
    setCart(newCart)
    let eventArr = newOrder.events

    eventArr.push(event.id)

    setNewOrder({ ...newOrder, events: eventArr })
  }

  const getAllOrders = async () => {
    const res = await axios.get('http://localhost:3001/api/orders')
    setOrders(res.data.orders)
  }

  const handleDelete = (orderId) => {
    const updatedCart = cart.filter((order) => order.id !== orderId)

    setCart(updatedCart)
  }

  useEffect(() => {
    const getEvents = async () => {
      const res = await GetEvents()
      setEvents(res.data.events)
    }
    getEvents()
    getAllOrders()
  }, [])

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
    navigate('/')
  }

  const checkToken = async () => {
    const user = await checkSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <header>
        <Nav user={user} handleLogOut={handleLogOut} />
      </header>

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                showing={showing}
                setShowing={setShowing}
                setUser={setUser}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/user-profile/:user_id"
            element={
              <UserProfile
                handleLogOut={handleLogOut}
                user={user}
                allUsers={allUsers}
                checkToken={checkToken}
              />
            }
          />
          <Route
            path="/sign-in"
            element={
              <SignIn
                showing={showing}
                setShowing={setShowing}
                setUser={setUser}
              />
            }
          />
          <Route path="/sign-up" element={<SignUp setShowing={setShowing} />} />
          <Route
            path="/login"
            element={<Login setUser={setUser} setShowing={setShowing} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                handleChange={handleChange}
                handleDelete={handleDelete}
                addToCart={addToCart}
                addOrder={addOrder}
                newOrder={newOrder}
                cart={cart}
                setCart={setCart}
                setNewOrder={setNewOrder}
                orders={orders}
                setOrders={setOrders}
                getAllOrders={getAllOrders}
                user={user}
              />
            }
          />
          <Route
            path="/events/:event_id"
            element={
              <EventDetails user={user} events={events} addToCart={addToCart} />
            }
          />

          {/* <Route
            path="/events/category/"
            element={<Sports showing={showing} setShowing={setShowing} />}
          /> */}

          <Route path="/order-placed" element={<OrderPlaced user={user} />} />
          <Route
            path="/update-profile/:user_id"
            element={<UpdateProfile user={user} checkToken={checkToken} />}
          />
          <Route
            path="/delete-profile/:user_id"
            element={
              <DeleteProfile
                user={user}
                checkToken={checkToken}
                handleLogOut={handleLogOut}
              />
            }
          />
          <Route path="/delete-success" element={<DeleteSuccess />} />
          {/* <Route
            path="/change-password/:user_id"
            element={
              <ChangePassword
                user={user}
                checkToken={checkToken}
                handleLogOut={handleLogOut}
              />
            }
          /> */}
        </Routes>
      </main>
    </div>
  )
}

export default App
