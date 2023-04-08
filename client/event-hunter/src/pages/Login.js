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
          <div className="all">
            <div className="input-wrapper">
              <input
                className="reg"
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
                className="reg"
                onChange={handleChange}
                type="password"
                name="password"
                placeholder="Your Password"
                value={formValues.password}
                required
              />
            </div>
            <div className="signButtons">
              <button
                className="place"
                disabled={!formValues.email || !formValues.password}
              >
                Login
              </button>
              <p className="account">
                Don't have an account? Click{' '}
                <button className="place" onClick={() => setShowing(true)}>
                  here
                </button>
                to make one!
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
