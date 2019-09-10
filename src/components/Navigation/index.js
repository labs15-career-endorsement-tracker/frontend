import React, { useState, useEffect } from "react"

import "./index.scss"

import { getUserById } from "../../api"
import { loadAuthDataFromLocalStorage } from "../../store"
import Logo from "../lib/Logo"
import Dropdown from "../lib/Dropdown"

const Navigation = () => {
  const [user, setUser] = useState({ first_name: "Loading..", last_name: "" })

  useEffect(() => {
    const { token, userId } = loadAuthDataFromLocalStorage()
    getUserById(token, userId).then(user => setUser(user))
  }, [])

  return (
    <nav className="nav_wrapper">
      <Logo />
      <div className="user_info">
        <div className="user">
          <p className="user_full_name">
            {user.first_name[0]} {user.last_name[0]}
          </p>
        </div>
        <div className="user_button">
          <Dropdown />
        </div>
      </div>
    </nav>
  )
}
export default Navigation
