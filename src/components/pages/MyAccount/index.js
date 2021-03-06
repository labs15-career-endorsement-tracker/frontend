import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { loadAuthDataFromLocalStorage } from "../../../store"
import { NavLink } from "react-router-dom"

import "./index.scss"

import { DeleteModal } from "../../lib"

import { fetchUser, fetchRequirements, logout } from "../../../actions"
import { history, clearAuthDataFromLocalStorage } from "../../../store"
import { updateUserCalendly } from "../../../api"

import { DashboardContent, ContentHeader } from "../../layout"

import { ProgressRing } from "../../lib"

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
    const { token, userId } = loadAuthDataFromLocalStorage()
    await updateUserCalendly(token, userData.calendly_link)
    dispatch(fetchUser(token, userId))
    setUserData({
      ...userData,
      calendly_link: ""
    })
  }

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
          <div className="coach-calendly">
            {/* if the user is an admin display the update calendly form */}
            {user.is_admin ? (
              <form onSubmit={handleSubmit}>
                <label htmlFor="coach-calendly-link">
                  Update Your Calendly Link
                </label>
                {/* <div> */}
                <input
                  id="coach-calendly-link"
                  name="calendly_link"
                  placeholder={user.calendly_link || "Enter Your Calendly Link"}
                  value={userData.calendly_link}
                  onChange={handleChange}
                />
                <button className="schedule-coach">Upload</button>
                {/* </div> */}
              </form>
            ) : // If the user has a coach display the schedule a meeting button
            user.coach ? (
              <>
                <p>
                  Your coach is{" "}
                  <span className="coach-name">{`${user.coach.first_name} ${user.coach.last_name}`}</span>
                </p>
                {/* If the user's coach has a calendly link show the schedule a meeting button */}
                {user.coach.calendly_link && (
                  <a
                    className="schedule-coach"
                    href={user.coach && user.coach.calendly_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Schedule a meeting
                  </a>
                )}
              </>
            ) : (
              // else display the you'll be able to schedule a meeting soon message
              <p>
                When you have been assigned to a coach, you'll be able to
                schedule a meeting here
              </p>
            )}
          </div>
          <div className="password-logout">
            <div className="reset-password">
              <i className="fas fa-key"></i>
              <NavLink to="/auth/reset-password">Reset Password</NavLink>
            </div>
            {/* coaches don't need to see the progress ring */}
            {!user.is_admin && (
              <ProgressRing
                startColor="#081534"
                endColor="#081534"
                progressValue={user.progress}
                trailColor="#ffffff"
                strokeOpacity={1}
                strokeLinecap="butt"
              ></ProgressRing>
            )}
            <div className="logout">
              <i className="fas fa-sign-out-alt"></i>
              <button
                onClick={() => {
                  clearAuthDataFromLocalStorage()
                  dispatch(logout())
                  setTimeout(() => history.push("/"), 300)
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        <DeleteModal />
      </div>
    </DashboardContent>
  )
}

export default MyAccount
