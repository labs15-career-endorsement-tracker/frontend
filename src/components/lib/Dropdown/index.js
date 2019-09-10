import React from "react"
import { history } from "../../../store"
import "./index.scss"
import Flyout from "./Flyout"

const Dropdown = () => {
  const triggerDropdown = () => {
    document.getElementById("logoutPanel").classList.toggle("show")
  }

  const triggerLogout = () => {
    localStorage.removeItem("auth")
    history.push("/sign-in")
  }

  return (
    <div className="dropdown-container">
      <button onClick={triggerDropdown} className="dropdown-button">
        <i className="far fa-angle-down fa-3x"></i>
      </button>
      <Flyout triggerDropdown={triggerDropdown} triggerLogout={triggerLogout} />
    </div>
  )
}

export default Dropdown
