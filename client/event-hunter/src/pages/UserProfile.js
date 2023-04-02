import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { UserDetails } from '../services/Auth'
import Cart from './Cart'

const UserProfile = ({ user, checkToken }) => {
  const [thisUser, setThisUser] = useState({})

  let { user_id } = useParams()

  useEffect(() => {
    checkToken()
    const fetchDetails = async () => {
      let details = await UserDetails(user_id)
      setThisUser(details)
    }
    fetchDetails()
  }, [user])
  // console.log(user)
  if (user)
    return (
      <div>
        <h1>
          {thisUser?.firstName} {thisUser?.lastName}
        </h1>
        <h2>{thisUser?.location}</h2>
        <h2>
          Orders <Cart />{' '}
        </h2>
      </div>
    )
}

export default UserProfile
