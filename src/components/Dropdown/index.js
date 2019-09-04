import React from "react"

import "./index.scss"

const Dropdown = () => {
  const triggerDropdown = () => {
    document.getElementById("logoutPanel").classList.toggle("show")
  }

  const triggerLogout = () => {
    // localStorage.removeItem("auth")
    console.log("triggered logout")
  }

  return (
    <div className="dropdown-container">
      <button onClick={triggerDropdown} className="dropdown-button">
        <i class="far fa-angle-down fa-3x"></i>
      </button>
      <div id="logoutPanel" className="dropdown-content">
        <div className="logout" onClick={triggerLogout}>
          <i className="fad fa-sign-out"></i>
          <p className="logout-text">Logout</p>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
