import React, { useState, useEffect } from "react"

import "./index.scss"

import { getUserById } from "../../api"
import { loadAuthDataFromLocalStorage } from "../../store"
import Logo from "../lib/Logo"
import Percentage from "../lib/Percentage"
import Dropdown from "../lib/Dropdown"

const Navigation = () => {
  const [user, setUser] = useState({ first_name: "Loading.." })

  useEffect(() => {
    const { token, userId } = loadAuthDataFromLocalStorage()
    getUserById(token, userId).then(user => setUser(user))
  }, [])

  return (
    <nav className="nav_wrapper">
      <Logo />
      <Percentage progress={user.progress}/>
      <div className="user_info">
        <div className="user">
          <p className="user_full_name">
            {user.first_name} {user.last_name}
          </p>
          <p className="user_track">{user.tracks_title}</p>
        </div>
        <div className="user_button">
          <Dropdown />
        </div>
      </div>
    </nav>
  )
}
export default Navigation
