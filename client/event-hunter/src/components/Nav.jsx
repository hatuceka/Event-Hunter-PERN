import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="navSection">
      <NavLink to="/user-profile">User Profile</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/cart">Cart</NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/sign-in">SignIn</NavLink>
      {/* <NavLink to="/categories">Categories</NavLink> */}
    </div>
  )
}

export default Nav
