import '../style/profile.css'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { UserDetails } from '../services/Auth'
import Cart from './Cart'
import User from '../services/api'

const UserProfile = ({ user, checkToken }) => {
  //console.log(user)
  const [thisUser, setThisUser] = useState({})
  //const [userDetails, setUserDetails] = useState({})
  // const [updated, setUpdated] = useState(false)
  let navigate = useNavigate()
  let { user_id } = useParams()

  const UserDetails = async () => {
    // let userId = parseInt(req.params.user_id)

    const res = await User.get(`/api/users/details/${user.id}`)
    console.log(res.data)
    setThisUser(res.data)
  }

  useEffect(() => {
    //checkToken()
    //const fetchDetails = async () => {
    if (user) {
      UserDetails()
    }
    //setThisUser(details)
    // }
    //fetchDetails()
  }, [user])

  const handleUpdate = () => {
    navigate(`/update-profile/${user_id}`)
  }

  const handleDelete = () => {
    navigate(`/delete-profile/${user_id}`)
  }

  // const handlePassword = () => {
  //   navigate(`/change-password/${user_id}`)
  // }

  // const handleChange = () => {
  //   setUserDetails({ ...userDetails, [e.target.id]: e.target.value })
  // }

  // const handleSubmit = async () => {
  // await UpdateUser(user_id)
  // setUserDetails({ ...userDetails })
  // setUpdated(true)
  // }

  if (user)
    return (
      <div className="cartBody">
        <div className="userInfo">
          <h1 className="detailTitle">
            <span className="span">Name:</span> {thisUser?.firstName}{' '}
            {thisUser?.lastName}
          </h1>
          <h2 className="detailTitle">
            <span className="span">Email:</span> {thisUser?.email}
          </h2>
          {/* <h2>{thisUser?.password}</h2> */}
          <h2 className="detailTitle">
            <span className="span">Address:</span> {thisUser?.location}
          </h2>
        </div>
        <div className="profileBtns">
          <button className="place" onClick={handleUpdate}>
            Update Account
          </button>
          {/* <button onClick={handlePassword}>Change Password</button> */}
          <button className="place" onClick={handleDelete}>
            Delete Account
          </button>
        </div>
      </div>
    )
}

export default UserProfile
