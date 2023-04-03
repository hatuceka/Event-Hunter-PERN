import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import UserProfile from './pages/UserProfile'
import Cart from './pages/Cart'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import SignIn from './pages/SignIn'
import Sports from './components/Sports'
import EventDetails from './pages/EventDetails'
import Nav from './components/Nav'
import { BASE_URL } from './services/api'
import axios from 'axios'
import { checkSession } from './services/Auth'

const App = () => {
  let navigate = useNavigate()

  const [user, setUser] = useState(null)
  const [allUsers, setAllUsers] = useState(null)
  // const [allOrders, setAllOrders] = useState(null)
  // const [allEvents, setAllEvents] = useState([])
  const [showing, setShowing] = useState(false)

  const GetUsers = async () => {
    const res = await axios.get(`${BASE_URL}/api/users`)
    setAllUsers(res.data)
  }

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
    GetUsers()
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
            path="sign-in"
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
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/events/:event_id"
            element={<EventDetails user={user} />}
          />

          <Route
            path="/events/category/:type"
            element={<Sports showing={showing} setShowing={setShowing} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
