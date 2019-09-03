import React from "react"

// import "../styles/index"


const Dropdown = props => {
  return (
    <div className="dropdown-container">
      <button onclick="dropdown()" class="dropdown_button">
        <i class="far fa-angle-down fa-3x"></i>
      </button>
      <div className="dropdown_content">Logout</div>
    </div>
  )
}

export default Dropdown
