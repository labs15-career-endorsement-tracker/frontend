import React from "react"

import "./index.scss"

import {
  SupportLinks,
  SideBarRequirements,
  Profile,
  SidebarHeader,
  Logo
} from "../../lib"

const Sidebar = () => {
  return (
    <aside className="dashboard-sidebar">
      <Logo></Logo>
      <SidebarHeader></SidebarHeader>
      <SupportLinks></SupportLinks>
      <SideBarRequirements></SideBarRequirements>
      <Profile />
    </aside>
  )
}

export default Sidebar
