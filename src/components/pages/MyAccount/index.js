import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { loadAuthDataFromLocalStorage } from "../../../store"
import { NavLink } from "react-router-dom"

import "./index.scss"

import { fetchUser, fetchRequirements, logout } from "../../../actions"
import { history, clearAuthDataFromLocalStorage } from "../../../store"
import { updateUserCalendly } from "../../../api"

const MyAccount = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.userReducer.user)
  const [userData, setUserData] = useState({ calendly_link: "" })
  console.log(user)

  useEffect(() => {
    const { userId, token } = loadAuthDataFromLocalStorage()
    dispatch(fetchRequirements(token))
    dispatch(fetchUser(token, userId))
  }, [dispatch])

  const handleChange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const { token } = loadAuthDataFromLocalStorage()

    await updateUserCalendly(token, userData.calendly_link)
  }

  return (
    <div className="myaccount-container">
      <div className="user-info-container">
        <div className="account-text">
          <h1>Account Info</h1>
          {/* <p>Update your account settings</p> */}
        </div>
      </div>
      <div className="account-info">
        <table className="account-details">
          <tbody>
            <tr>
              <td className="labels">First name</td>
              <td className="content">{user.first_name}</td>
            </tr>
            <tr>
              <td className="labels">Last name</td>
              <td className="content">{user.last_name}</td>
            </tr>
            <tr>
              <td className="labels">Track</td>
              <td className="content">{user.tracks_title}</td>
            </tr>
          </tbody>
        </table>
        <NavLink to="/auth/reset-password">Change Password</NavLink>
        <button
          onClick={() => {
            clearAuthDataFromLocalStorage()
            dispatch(logout())
            setTimeout(() => history.push("/"), 300)
          }}
        >
          Logout
        </button>

        <form onSubmit={handleSubmit}>
          <label>Calendly Link</label>
          <input
            name="calendly_link"
            placeholder={user.calendly_link}
            value={userData.calendly_link}
            onChange={handleChange}
          />
          <button>Upload</button>
        </form>
      </div>
    </div>
  )
}

export default MyAccount
