import React, { useState, useEffect } from "react"
import Burger from "@animated-burgers/burger-rotate"

import "./index.scss"
import "@animated-burgers/burger-rotate/dist/styles.css"
import Logo from "../lib/Logo"
import Dropdown from "../lib/Dropdown"
import Flyout from "../lib/Dropdown/Flyout"
import { history } from "../../store"

const Navigation = ({ user, width, isOpen, setIsOpen }) => {
  
  const triggerLogout = () => {
    localStorage.removeItem("auth")
    history.push("/sign-in")
  }
  const triggerDropdown = () => {
    setTimeout(() => setIsOpen(false), 400)
  }
  return (
    <nav className="nav_wrapper">
      <Logo />

      {width > 768 ? (
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
      ) : (
        <div className="burger-container">
          <Burger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
        </div>
      )}
      {isOpen && (
        <div className="burger-flyout">
          <Flyout
            triggerLogout={triggerLogout}
            triggerDropdown={triggerDropdown}
          />
        </div>
      )}
    </nav>
  )
}
export default Navigation
