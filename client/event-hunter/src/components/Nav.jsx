import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Nav = ({ user }) => {
  const userId = localStorage.getItem('userId')

  const [showCategories, setShowCategories] = useState(false)

  const toggleCategories = () => {
    setShowCategories(!showCategories)
  }

  return (
    <header>
      <div className="navSection">
        <NavLink to={`/user-profile/${userId}`}>User Profile</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/cart">Cart</NavLink>
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
              <NavLink to="/categories/sports">Sports</NavLink>
              <NavLink to="/categories/theater">Theater</NavLink>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Nav
