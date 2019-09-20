import React from "react"

import "./index.scss"

const UserInfo = ({ user }) => {
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
        <h2 className="welcome-msg">{greeting()},</h2>
        <h2 className="first-name">{user.first_name}</h2>
        <p>
          <span className="track">{`${user.tracks_title} `}</span>
        </p>
      </div>
    </div>
  )
}

export default UserInfo
