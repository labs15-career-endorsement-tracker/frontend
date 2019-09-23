import React from "react"

import "./index.scss"

import { SupportLinks, SidebarHeader, SidebarMenu, Logo } from "../../lib"

const Sidebar = () => {
  return (
    <aside className="dashboard-sidebar">
      <Logo></Logo>
      <SidebarHeader></SidebarHeader>
      <SidebarMenu></SidebarMenu>
      <SupportLinks></SupportLinks>
    </aside>
  )
}

export default Sidebar
