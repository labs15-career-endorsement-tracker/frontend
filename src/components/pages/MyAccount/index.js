import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { loadAuthDataFromLocalStorage } from "../../../store"

import "./index.scss"

import Percentage from "../../../components/lib/Percentage"

import { fetchUser, fetchRequirements } from "../../../actions"

const MyAccount = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.userReducer.user)

  useEffect(() => {
    const { userId, token } = loadAuthDataFromLocalStorage()
    dispatch(fetchRequirements(token))
    dispatch(fetchUser(token, userId))
  }, [dispatch])

  console.log(`user`, user, user.is_admin)

  return (
    <div className="myaccount-container">
      <div className="user-info-container">
        <div className="account-text">
          <h1>My Account</h1>
          <p>Update your account settings</p>
        </div>
        <div className="meter-wrapper">
          <div className="meter-box">
            <div className="meter">
              <Percentage progress={user.progress} />
            </div>
          </div>
        </div>
      </div>
      <div className="account-info">
        <p>
          <span className="information">First name</span> {user.first_name}
        </p>
        <p>
          <span className="information">Last name</span> {user.last_name}
        </p>
        <p>
          <span className="information">Track</span> {user.tracks_title}
        </p>
      </div>
    </div>
  )
}

export default MyAccount
