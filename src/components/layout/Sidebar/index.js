import React from "react"
import { useSelector } from "react-redux"

import "./index.scss"

import { SupportLinks, UserInfo, SideBarRequirements } from "../../lib"

const Sidebar = () => {
  const user = useSelector(state => state.userReducer.user)

  return (
    <aside className="dashboard-sidebar">
      <UserInfo user={user}></UserInfo>
      <SupportLinks></SupportLinks>
      <SideBarRequirements></SideBarRequirements>
    </aside>
  )
}

export default Sidebar
