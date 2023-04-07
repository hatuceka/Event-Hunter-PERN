import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Nav = ({ user, orderCount, order, handleLogOut }) => {
  const [showCategories, setShowCategories] = useState(false)

  const toggleCategories = () => {
    setShowCategories(!showCategories)
  }

  return (
    <header>
      <div className="navSection">
        {/* Always display these nav links */}
        <NavLink to="/cart">Cart {orderCount} </NavLink>

        <NavLink to="/about">About</NavLink>
        <NavLink to="/">Home</NavLink>

        {user ? (
          // Display these nav links only if there is a logged-in user
          <>
            <NavLink to={`/user-profile/${user.userId}`}>User Profile</NavLink>
            <button onClick={handleLogOut}>Logout</button>
          </>
        ) : (
          // Display these nav links only if there is no logged-in user
          <>
            <NavLink to="/sign-in">Login</NavLink>
          </>
        )}

        <div className="dropdown">
          <button className="dropbtn" onClick={toggleCategories}>
            Categories
            <i className="fa fa-caret-down"></i>
          </button>
          {showCategories && (
            <div className="dropdown-content">
              <NavLink to="/category/music">Music</NavLink>
              <NavLink to="/events/category/sports">Sports</NavLink>
              <NavLink to="/category/theater">Theater</NavLink>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Nav

// import { NavLink } from 'react-router-dom'
// import { useState, useEffect } from 'react'
// import { findEventsByCategory } from '../services/Event'
// import { useParams } from 'react-router-dom'

// const Nav = ({ user, orderCount, order }) => {
//   const userId = localStorage.getItem('userId')

//   const [showCategories, setShowCategories] = useState(false)

//   const toggleCategories = () => {
//     setShowCategories(!showCategories)
//   }

//   // useEffect(() => {
//   //   const fetchType = async () => {
//   //     //console.log(type)
//   //     //let events = await findEventsByCategory(type)
//   //     setEventList(events.data.events)
//   //   }
//   //   fetchType()
//   // }, [type])

//   // const onSubmit = async () => {
//   //   let res = await findEventsByCategory(type)
//   //   setShowCategories = true
//   //   findEventsByCategory()
//   // }

//   return (
//     <header>
//       <div className="navSection">
//         <NavLink to={`/user-profile/${userId}`}>User Profile</NavLink>
//         <NavLink to="/about">About</NavLink>
//         <NavLink to="/cart">Cart {orderCount} </NavLink>
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/sign-in">SignIn</NavLink>
//         <div className="dropdown">
//           <button className="dropbtn" onClick={toggleCategories}>
//             Categories
//             <i className="fa fa-caret-down"></i>
//           </button>
//           {showCategories && (
//             <div className="dropdown-content">
//               <NavLink to="/category/music">Music</NavLink>
//               <NavLink to="/events/category/sports">Sports</NavLink>
//               <NavLink to="/category/theater">Theater</NavLink>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Nav
