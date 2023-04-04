import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { findEventsByCategory } from '../services/Event'
import { useParams } from 'react-router-dom'

const Nav = ({ user, orderCount, order }) => {
  const userId = localStorage.getItem('userId')

  const [showCategories, setShowCategories] = useState(false)

  const toggleCategories = () => {
    setShowCategories(!showCategories)
  }

  // useEffect(() => {
  //   const fetchType = async () => {
  //     //console.log(type)
  //     //let events = await findEventsByCategory(type)
  //     setEventList(events.data.events)
  //   }
  //   fetchType()
  // }, [type])

  // const onSubmit = async () => {
  //   let res = await findEventsByCategory(type)
  //   setShowCategories = true
  //   findEventsByCategory()
  // }

  return (
    <header>
      <div className="navSection">
        <NavLink to={`/user-profile/${userId}`}>User Profile</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/cart">Cart ({orderCount}) </NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/sign-in">SignIn</NavLink>
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleCategories}>
            Categories
            <i className="fa fa-caret-down"></i>
          </button>
          {showCategories && (
            <div className="dropdown-content">
              <NavLink to="/categories/music">Music</NavLink>
              <NavLink to="/events/categories/sports">Sports</NavLink>
              <NavLink to="/categories/theater">Theater</NavLink>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Nav
