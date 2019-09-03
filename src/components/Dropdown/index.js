import React from "react"

import "./index.scss"

const Dropdown = props => {
  const triggerDropdown = () => {
    document.getElementById("logoutPanel").classList.toggle("show")
    console.log("test")
  }

  const triggerLogout = () => {
    localStorage.removeItem("auth")
  }

  window.onclick = e => {}

  return (
    <div className="dropdown-container">
      <button onClick={triggerDropdown} class="dropdown-button">
        <i class="far fa-angle-down fa-3x"></i>
      </button>
      <div id="logoutPanel" className="dropdown-content">
        <div className="logout" onClick={triggerLogout}>
          <i class="fad fa-sign-out"></i>
          <p className="logout-text">Logout</p>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
