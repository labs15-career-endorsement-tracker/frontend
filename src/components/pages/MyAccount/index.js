import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { loadAuthDataFromLocalStorage } from "../../../store"
import { NavLink } from "react-router-dom"

import "./index.scss"

import { DeleteModal } from '../../lib'

import { fetchUser, fetchRequirements, logout } from "../../../actions"
import { history, clearAuthDataFromLocalStorage } from "../../../store"
import { updateUserCalendly } from "../../../api"

import { DashboardContent, ContentHeader } from "../../layout"

const MyAccount = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.userReducer.user)
  const [userData, setUserData] = useState({ calendly_link: "" })

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
  console.log(user)
  return (
    <DashboardContent>
      <ContentHeader
        title={"My Account"}
        prompt={"View or update your account details here"}
        progress={user && !user.is_admin ? user.progress : -1}
      ></ContentHeader>
      <div className="myaccount-container">
        <div className="user-info-container">
          <div className="account-text">
            <h1>{user.first_name}</h1>
            <p>{user.last_name}</p>
          </div>
          <p>{user.tracks_title}</p>
        </div>

        <div className="account-info">
          {user.coach ? (
            <div className="coach-calendly">
              <p>
                Your coach is <span className="coach-name">Coach Name</span>
              </p>
              <button>Schedule a meeting</button>
            </div>
          ) : (
            <p>
              When you have been assigned to a coach, you'll be able to schedule
              a meeting here
            </p>
          )}
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

          {user.is_admin ? (
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
          ) : (
            <h2>Coach calendly Link</h2>
          )}

        </div>
          <DeleteModal />
      </div>
    </DashboardContent>
  )
}

export default MyAccount
