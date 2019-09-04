import React, { useState, useEffect } from "react"
import axios from "axios"
import Logo from "../lib/Logo"
import Percentage from "../lib/Percentage"
import Dropdown from "../Dropdown"
import { loadFromLocalStorage } from "../../store"
import { getUserById } from "../../api"

import "./index.scss"

const Navigation = () => {
  const [user, setUser] = useState({ first_name: "" })

  useEffect(() => {
    const { token, userId } = loadFromLocalStorage("auth")

    getUserById(token, userId)
      .then(user => setUser(user))
      .catch(error => console.log(error.response))
  }, [])

  return (
    <nav className="nav_wrapper">
      <Logo />
      <Percentage />
      <div className="user_info">
        <div className="user">
          <p className="user_full_name">
            {user.first_name} {user.last_name}
          </p>
          <p className="user_track">Full Stack Web</p>
        </div>
        <div className="user_button">
          <Dropdown />
        </div>
      </div>
    </nav>
  )
}
export default Navigation
