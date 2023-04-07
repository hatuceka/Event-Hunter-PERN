import User from '../services/api'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const DeleteProfile = ({ user, userDetails, setUserDetails, handleLogOut }) => {
  let navigate = useNavigate()

  const deleteAccount = async (user_id) => {
    const res = await User.delete(
      `/api/users/delete/${user.id}`
      //userDetails
    )
    localStorage.setItem('token', res.data.token)
    localStorage.setItem('userId', res.data.user_id)
    //setUserDetails({ ...userDetails })
    navigate('/sign-in')
    handleLogOut(user_id)
  }

  return (
    <div>
      <button onClick={() => deleteAccount()}>Delete Permanently</button>
      <h4>If you are not sure to delete your account</h4>
      <Link to="/">Go back to hunt events</Link>
    </div>
  )
}

export default DeleteProfile
