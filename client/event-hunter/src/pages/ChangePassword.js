// import { useState } from 'react'
// //import { useNavigate } from 'react-router-dom'
// import User from '../services/api'

// const ChangePassword = ({ handleLogOut, thisUser }) => {
//   //let navigate = useNavigate()

//   const [newPassword, setNewPassword] = useState({})
//   //const [updated, setUpdated] = useState(false)

//   const updatePassword = async (e, user_id) => {
//     e.preventDefault()
//     const res = await User.put(
//       `/api/users/update_password/${thisUser.id}`,
//       newPassword
//     )
//     // localStorage.setItem('token', res.data.token)
//     // localStorage.setItem('userId', res.data.user_id)
//     setNewPassword({ ...newPassword })
//     handleLogOut(user_id)
//     //setUpdated(true)
//   }

//   const onChange = (e) => {
//     setNewPassword({ ...newPassword, [e.target.id]: e.target.value })
//   }

//   return (
//     <div>
//       <form onSubmit={updatePassword}>
//         <input
//           type="email"
//           id="email"
//           value={newPassword.email}
//           placeholder="Current Email"
//         />
//         <input
//           type="password"
//           id="oldPassword"
//           onChange={onChange}
//           value={newPassword.oldPassword}
//           placeholder="Old Password"
//         />
//         <input
//           type="password"
//           id="newPassword"
//           onChange={onChange}
//           value={newPassword.newPassword}
//           placeholder="Old Password"
//         />
//         <button type="submit">Update Password</button>
//       </form>
//     </div>
//   )
// }

// export default ChangePassword
