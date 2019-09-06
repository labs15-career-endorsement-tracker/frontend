import React, { useState, useEffect } from "react"

import { getUserById } from "../api"
import { loadAuthDataFromLocalStorage } from "../store"

import Percentage from "./lib/Percentage"

const UserInfo = ({fetchUser, user, userInProgress}) => {

  useEffect(() => {
    const { token, userId } = loadAuthDataFromLocalStorage()
    fetchUser(token, userId)
  }, [])

  const todayDate = new Date().toDateString()

  const greeting = () => {
    const hour = new Date().getHours()
    if (hour >= 3 && hour < 12) {
      return "Good morning"
    } else if (hour >= 12 && hour < 17) {
      return "Good afternoon"
    } else {
      return "Good evening"
    }
  }

  return (
    <div className="userInfo-container">
      <div className="dateAndGreet">
        <div className="date">{todayDate}</div>
        <h2 className="welcome-msg">{greeting()},</h2>
        <h2 className="first-name">{!Object.keys(user).length ? "Loading..." : `${user.first_name}`}</h2>
        <p>Below are your requirements to be fully endorsed.</p>
      </div>
      <div className="meter-wrapper">
        <div className="meter-box">
          <div className="meter">
            {!Object.keys(user).length ? <Percentage isLoading={true} /> : <Percentage progress={user.progress} isLoading={false} />}
          </div>
          <h4 className="progress-label">Overall Progress</h4>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
