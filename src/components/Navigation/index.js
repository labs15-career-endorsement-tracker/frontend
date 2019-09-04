import React, { useState, useEffect } from "react"
import axios from "axios"
import Logo from "../lib/Logo"
import Percentage from "../lib/Percentage"
import Dropdown from "../Dropdown"

import "./index.scss"

const Navigation = () => {
  const [user, setUser] = useState({ first_name: "" })
  useEffect(() => {
    const userId = localStorage.getItem("userId")
    axios.get("http://localhost:5000/api/v0/users").then(res => {
      const filtUser = res.data.filter(user => user.id === parseInt(userId))
      setUser(filtUser[0])
    })
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
