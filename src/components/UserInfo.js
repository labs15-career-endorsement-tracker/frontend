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
        <div className="date">{todayDate}</div>
        <h2 className="welcome-msg">{greeting()},</h2>
        <h2 className='first-name'>{user.first_name}</h2>
        <p>Below are your requirements to be fully endorsed.</p>
      </div>
      <div className='meter-wrapper'>
        <div className='meter-box'>
          <div className='meter'>
            <Percentage progress={user.progress} />
          </div>
          <h4 className='progress-label'>Overall Progress</h4>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
