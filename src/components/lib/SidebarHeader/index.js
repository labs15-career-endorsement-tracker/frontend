import React from "react"
import { useSelector } from "react-redux"

import { useGreeting } from "../../../hooks"
import { ProgressRing } from "../../lib"

import "./index.scss"

const SidebarHeader = () => {
  const { first_name, progress, is_admin } = useSelector(
    state => state.userReducer.user
  )
  const greeting = useGreeting()

  return (
    <header className="sidebar__header">
      {!is_admin && <ProgressRing progressValue={progress}></ProgressRing>}
      <h3 className="greeting">{greeting + ","}</h3>
      <h2 className="greeting-name">{first_name}</h2>
    </header>
  )
}

export default SidebarHeader
