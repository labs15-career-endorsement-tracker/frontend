import React from "react"

import "./index.scss"

import { history } from "../../../store"
import { Logo } from "../../lib"

// TODO: Temporary; delete as soon as unnecessary
const logout = () => {
  localStorage.removeItem("auth")
  history.push("/auth/sign-in")
}

const Notification = () => {
  return (
    <>
      <i className="fas fa-bell" onClick={logout}></i>
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
