import React from "react"
import "./index.scss"

const Flyout = ({triggerLogout, triggerDropdown}) => {
//   const triggerDropdown = () => {
//     document.getElementById("logoutPanel").classList.toggle("show")
//   }

//   const triggerLogout = () => {
//     localStorage.removeItem("auth")
//     history.push("/sign-in")
//   }

  return (
      <div id="logoutPanel" className="dropdown-content">
        <div
          className="logout"
          onClick={triggerLogout}
          onMouseOut={triggerDropdown}
        >
          <i className="fad fa-sign-out"></i>
          <p className="logout-text">Logout</p>
        </div>
      </div>
  )
}

export default Flyout