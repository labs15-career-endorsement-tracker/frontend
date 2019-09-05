import React, { useState, useEffect } from "react"

import { getUserById } from "../api"
import { loadAuthDataFromLocalStorage } from "../store"

import Percentage from './lib/Percentage'

const UserInfo = () => {
  const [user, setUser] = useState({ first_name: "" })

  useEffect(() => {
    const { token, userId } = loadAuthDataFromLocalStorage()
    getUserById(token, userId)
      .then(user => setUser(user))
      .catch(err => console.log(err.response))
  }, [])

  const todayDate = new Date().toDateString()

  return (
    <div className="userInfo-container">
      <div className="dateAndGreet">
        <div className="date">{todayDate}</div>
        <h2 className="welcome-msg">
          Welcome back, {user.first_name}.
          <br /> LET'S GET ENDRSD!
        </h2>
      </div>
      <div className='progress-meter'>
        <Percentage progress={user.progress} />
      </div>
    </div>
  )
}

export default UserInfo
