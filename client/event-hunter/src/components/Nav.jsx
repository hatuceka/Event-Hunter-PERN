import { NavLink } from 'react-router-dom'

const Nav = ({ user }) => {
  const userId = localStorage.getItem('userId')

  return (
    <div className="navSection">
      <NavLink to={`/user-profile/${userId}`}>User Profile</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/cart">Cart</NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/sign-in">SignIn</NavLink>
      {/* <NavLink to="/categories">Categories</NavLink> */}
    </div>
  )
}

export default Nav
