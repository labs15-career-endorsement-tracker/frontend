import React from "react"

import "./index.scss"

import { Logo } from "../../lib"

const Notification = () => {
  return (
    <>
      <i className="fas fa-bell"></i>
    </>
  )
}

const DashboardHeader = () => {
  return (
    <header className="dashboard-header">
      <Logo></Logo>
      <nav>
        <Notification></Notification>
      </nav>
    </header>
  )
}

export default DashboardHeader
