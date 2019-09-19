import React from "react"
import { NavLink } from "react-router-dom"

import "./index.scss"

const SideBarRequirements = ({ requirements }) => {
  return (
    <aside className="sb-req-ctr">
      <div className="sb-req-inner-ctr">
        <i className="far fa-bars"></i>
        <p className="sb-req-text">Requirements</p>
        <div className="sb-arrow-icon">
          <i className="fad fa-arrow-down"></i>
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
