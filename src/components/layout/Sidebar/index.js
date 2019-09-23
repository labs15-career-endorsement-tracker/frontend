import React from "react"

import "./index.scss"

import {
  SupportLinks,
  SideBarRequirements,
  Profile,
  SidebarHeader
} from "../../lib"

const Sidebar = () => {
  return (
    <aside className="dashboard-sidebar">
      <SidebarHeader></SidebarHeader>
      <SupportLinks></SupportLinks>
      <SideBarRequirements></SideBarRequirements>
      <Profile />
    </aside>
  )
}

export default Sidebar
