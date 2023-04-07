import { Link } from 'react-router-dom'

const DeleteSuccess = () => {
  return (
    <div>
      <h3>Your Event Hunter account has permanently deleted!</h3>
      <Link to="/">Go back to hunt events</Link>
    </div>
  )
}

export default DeleteSuccess
