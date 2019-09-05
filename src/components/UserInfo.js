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

  const greeting = () => {
    const hour = new Date().getHours()
    if (hour >= 3 && hour < 12) {
      return 'Good morning'
    } else if (hour >= 12 && hour < 17) {
      return 'Good afternoon'
    } else {
      return 'Good evening'
    }
  }

  return (
    <div className="userInfo-container">
      <div className="dateAndGreet">
        <h2 className="welcome-msg">{greeting()},</h2>
        <h2 className='first-name'>{user.first_name}</h2>
        <div className="date">{todayDate}</div>
      </div>
      <div className='progress-meter'>
        <Percentage progress={user.progress} />
        <label className='progress-label'>Overall Progress</label>
      </div>
      
    </div>
  )
}

export default UserInfo
