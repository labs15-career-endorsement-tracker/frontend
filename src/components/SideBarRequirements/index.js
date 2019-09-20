import React from "react"
import { NavLink } from "react-router-dom"
// import { transition } from "./utils"

import "./index.scss"

const SideBarRequirements = ({ requirements }) => {
  const panel = document.querySelector(".req-links")
  const transition = () => {
    panel.classList.toggle("active")
  }

  return (
    <aside>
      <div className="req-content">
        <div className="req-text">
          <i class="fas fa-tasks-alt"></i>
          <p>Requirements</p>
        </div>
        <div className="icon" onClick={transition}>
          <i class="far fa-angle-down"></i>
        </div>
      </div>
      <div className="req-links">
        {requirements.map(req => (
          <div className="req-ind-link">
            <NavLink
              to={`/requirements/${req.id}`}
              activeClassName="req-link-active"
              className="req-link-inactive"
            >
              {req.title}
            </NavLink>
          </div>
        ))}
      </div>
    </aside>
  )
}

export default SideBarRequirements
