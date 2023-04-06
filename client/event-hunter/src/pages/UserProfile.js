import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { UserDetails } from '../services/Auth'
import Cart from './Cart'

const UserProfile = ({
  user,
  checkToken

  //getAllOrders = { getAllOrders }
}) => {
  const [thisUser, setThisUser] = useState({})
  // const [userDetails, setUserDetails] = useState({})
  // const [updated, setUpdated] = useState(false)
  let navigate = useNavigate()
  let { user_id } = useParams()

  useEffect(() => {
    checkToken()
    const fetchDetails = async () => {
      let details = await UserDetails(user_id)
      setThisUser(details)
    }
    fetchDetails()
  }, [user])

  const handleUpdate = () => {
    navigate(`/update-profile/${user_id}`)
  }

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
      <div>
        <h1>
          {thisUser?.firstName} {thisUser?.lastName}
        </h1>
        <h2>{thisUser?.email}</h2>
        {/* <h2>{thisUser?.password}</h2> */}
        <h2>{thisUser?.location}</h2>
        <button onClick={handleUpdate}>Update Profile</button>
      </div>
    )
}

export default UserProfile
