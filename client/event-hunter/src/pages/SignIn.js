import Login from '../pages/Login'
import SignUp from '../pages/SignUp'

const SignIn = ({ showing, setShowing, setUser }) => {
  return (
    <div className="signingform">
      {showing ? (
        <SignUp showing={showing} setShowing={setShowing} />
      ) : (
        <Login showing={showing} setShowing={setShowing} setUser={setUser} />
      )}
    </div>
  )
}
export default SignIn
