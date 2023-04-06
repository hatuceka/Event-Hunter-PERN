import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const SignUp = ({ setShowing }) => {
  let navigate = useNavigate()

  let initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    location: ''
  }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      password: formValues.password,
      location: formValues.location
    })
    setFormValues(initialState)
    navigate('/login')
  }

  return (
    <div>
      <div>
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              className="reg"
              onChange={handleChange}
              name="firstName"
              type="text"
              placeholder="First Name"
              value={formValues.firstName}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              className="reg"
              onChange={handleChange}
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={formValues.lastName}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              className="reg"
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="E-mail Address"
              value={formValues.email}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              className="reg"
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Password"
              value={formValues.password}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              className="reg"
              onChange={handleChange}
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={formValues.confirmPassword}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              className="reg"
              onChange={handleChange}
              name="location"
              type="text"
              placeholder="Address"
              value={formValues.location}
              required
            />
          </div>
          <div className="signButtons">
            <button
              className="signbtn"
              disabled={
                !formValues.email ||
                (!formValues.password && formValues.confirmPassword)
              }
            >
              Sign Up
            </button>
            <p className="account">
              Already have an account? Click{' '}
              <button className="switchbtn" onClick={() => setShowing(false)}>
                here
              </button>{' '}
              to Login!
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
