import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { loadAuthDataFromLocalStorage } from "../../../store"
import { NavLink } from "react-router-dom"

import "./index.scss"

import { fetchUser, fetchRequirements } from "../../../actions"
import { history } from "../../../store"

const MyAccount = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.userReducer.user)

  useEffect(() => {
    const { userId, token } = loadAuthDataFromLocalStorage()
    dispatch(fetchRequirements(token))
    dispatch(fetchUser(token, userId))
  }, [dispatch])

  return (
    <div className="myaccount-container">
      <div className="user-info-container">
        <div className="account-text">
          <h1>My Account</h1>
          <p>Update your account settings</p>
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
            localStorage.clear()
            history.push("/")
          }}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default MyAccount
