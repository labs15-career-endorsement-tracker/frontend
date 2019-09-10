import React, { useState, useEffect } from "react"
import Burger from "@animated-burgers/burger-rotate"

import "./index.scss"
import "@animated-burgers/burger-rotate/dist/styles.css"

import { getUserById } from "../../api"
import { loadAuthDataFromLocalStorage } from "../../store"
import Logo from "../lib/Logo"
import Dropdown from "../lib/Dropdown"

const Navigation = props => {
  const [user, setUser] = useState({ first_name: "Loading..", last_name: "" })
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const { token, userId } = loadAuthDataFromLocalStorage()
    getUserById(token, userId).then(user => setUser(user))
    const handleResize = () => {
      return setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [width])

  return (
    <nav className="nav_wrapper">
      <Logo />
      <Burger />
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
