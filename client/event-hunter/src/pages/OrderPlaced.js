import { Link } from 'react-router-dom'

const OrderPlaced = () => {
  return (
    <div className="cartBody">
      <h1 className="placed">
        Your ticket is ready!
        <br></br>
        Enjoy the event!
      </h1>

      <Link className="goBackPlaced" to="/">
        Go Back to Hunt Events
      </Link>
    </div>
  )
}

export default OrderPlaced
