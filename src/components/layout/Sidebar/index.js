import React from "react"

import "./index.scss"

import { SupportLinks, SidebarHeader, SidebarMenu, Logo } from "../../lib"

const Sidebar = ({isOpen}) => {
  return (
    <aside className="dashboard-sidebar" style={{display: isOpen ? "flex" : "none"}}>
      <Logo></Logo>
      <SidebarHeader></SidebarHeader>
      <SidebarMenu></SidebarMenu>
      <SupportLinks></SupportLinks>
    </aside>
  )
}

export default Sidebar
