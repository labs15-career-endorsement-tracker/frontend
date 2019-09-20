import React from "react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

import "./index.scss"

import { SupportLinks, UserInfo, SideBarRequirements, Profile } from "../../lib"

const Sidebar = () => {
  const user = useSelector(state => state.userReducer.user)

  return (
    <aside className="dashboard-sidebar">
      <UserInfo user={user}></UserInfo>
      <SupportLinks></SupportLinks>
      <SideBarRequirements></SideBarRequirements>
      <Profile />
    </aside>
  )
}

export default Sidebar
