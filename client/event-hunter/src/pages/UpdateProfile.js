import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
//import { UpdateUser } from '../services/Auth'
import User from '../services/api'

const UpdateProfile = ({ user, firstName, lastName, email, location }) => {
  const [userDetails, setUserDetails] = useState({
    firstName,
    lastName,
    email,
    location
  })
  const [updated, setUpdated] = useState(false)
  let navigate = useNavigate()

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e, user_id) => {
    e.preventDefault()
    await User.put(`/api/users/update_user/${user_id}`, userDetails)
    // localStorage.setItem('token', res.data.token)
    // localStorage.setItem('userId', res.data.user_id)
    setUserDetails({ ...userDetails })
    setUpdated(true)
    //window.location.reload(false)
    navigate(`/user-profile/${user_id}`)
  }

  return (
    <div className="updateForm">
      <form className="col" onSubmit={(e) => handleSubmit(e, user.id)}>
        <div className="all">
          <div>
            <input
              className="reg"
              type="text"
              id="firstName"
              onChange={handleChange}
              value={userDetails.firstName}
              placeholder="First Name"
            />
          </div>
          <div>
            <input
              className="reg"
              type="text"
              id="lastName"
              onChange={handleChange}
              value={userDetails.lastName}
              placeholder="Last Name"
            />
          </div>
          <div>
            <input
              className="reg"
              type="email"
              id="email"
              onChange={handleChange}
              value={userDetails.email}
              placeholder="Email"
            />
          </div>
          {/* <div>
          <input
            type="password"
            id="password"
            onChange={handleChange}
            value={userDetails.password}
            placeholder="Password"
          />
        </div> */}
          <div>
            <input
              className="reg"
              type="text"
              id="location"
              onChange={handleChange}
              value={userDetails.location}
              placeholder="Address"
            />
          </div>
          <button className="place" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  )
}

export default UpdateProfile
