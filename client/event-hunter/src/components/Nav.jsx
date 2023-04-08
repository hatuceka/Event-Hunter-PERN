import '../style/nav.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Nav = ({ user, handleLogOut }) => {
  const [showCategories, setShowCategories] = useState(false)

  const toggleCategories = () => {
    setShowCategories(!showCategories)
  }

  return (
    <header>
      <div className="navSection">
        <NavLink className="navlink" to="/">
          EventHunter
        </NavLink>
        <NavLink className="navlink" to="/cart">
          Cart
        </NavLink>

        <NavLink className="navlink" to="/about">
          About
        </NavLink>

        {user ? (
          // Display these nav links only if there is a logged-in user
          <>
            <NavLink className="navlink" to={`/user-profile/${user.userId}`}>
              User Profile
            </NavLink>
            <NavLink className="navlink" onClick={handleLogOut}>
              Logout
            </NavLink>
          </>
        ) : (
          // Display these nav links only if there is no logged-in user
          <>
            <NavLink className="navlink" to="/sign-in">
              Login
            </NavLink>
          </>
        )}
      </div>
    </header>
  )
}

export default Nav
