import User from '../services/api'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const DeleteProfile = ({
  user,
  setUser,
  userDetails,
  setUserDetails,
  handleLogOut
}) => {
  let navigate = useNavigate()

  const deleteAccount = async (user_id) => {
    const res = await User.delete(`/api/users/delete/${user.id}`)
    localStorage.setItem('token', res.data.token)
    localStorage.setItem('userId', res.data.user_id)

    handleLogOut(user_id)
  }

  return (
    <div className="cartBody">
      <div className="all">
        <button className="place" onClick={() => deleteAccount()}>
          Delete Permanently
        </button>
        <h3 className="or">OR</h3>
        <h4 className="delAccount">
          If you are not sure to delete your account,
        </h4>
        <div className="link">
          <Link className="goBackDel" to="/">
            Go back to hunt events
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DeleteProfile
