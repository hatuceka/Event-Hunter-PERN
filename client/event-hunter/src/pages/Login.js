import { useState } from 'react'
import { LoginUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const Login = ({ setUser, setShowing }) => {
  let navigate = useNavigate()

  const initialState = {
    email: '',
    password: ''
  }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    e.preventDefault()
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await LoginUser(formValues)
    setFormValues(initialState)
    setUser(payload)
    navigate('/')
  }

  return (
    <div>
      <div>
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              className="emailInput"
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Your E-mail"
              value={formValues.email}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              className="passwordInput"
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <div className="signButtons">
            <button
              className="signbtn"
              disabled={!formValues.email || !formValues.password}
            >
              Login
            </button>
            <p className="account">
              Don't have an account? Click{' '}
              <button className="switchbtn" onClick={() => setShowing(true)}>
                here
              </button>
              to make one!
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
