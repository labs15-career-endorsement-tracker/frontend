import React from "react"
import { useSelector } from "react-redux"

import "./index.scss"

import { SupportLinks, UserInfo } from "../../lib"

const Sidebar = () => {
  const user = useSelector(state => state.userReducer.user)

  return (
    <aside className="dashboard-sidebar">
      <UserInfo user={user}></UserInfo>
      <SupportLinks></SupportLinks>
    </aside>
  )
}

export default Sidebar
