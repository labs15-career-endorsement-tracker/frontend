import React from "react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

import "./index.scss"

import { SupportLinks, UserInfo, SideBarRequirements } from "../../lib"

const Sidebar = () => {
  const user = useSelector(state => state.userReducer.user)

  return (
    <aside className="dashboard-sidebar">
      <UserInfo user={user}></UserInfo>
      <SupportLinks></SupportLinks>
      <SideBarRequirements></SideBarRequirements>
      <NavLink to="/myaccount" className="my-account-link">
        <i class="fas fa-user-edit"></i> My Account
      </NavLink>
    </aside>
  )
}

export default Sidebar
