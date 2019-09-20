import React from "react"

import "./index.scss"
import "@animated-burgers/burger-rotate/dist/styles.css"

import SideBarRequirements from "../SideBarRequirements"
import SupportLinks from "../SupportLinks"
import UserInfo from "../UserInfo"

const SideBar = ({ user, isOpen, setIsOpen, width, requirements }) => {
  return (
    <section className={`sidebar ${(width > 768 || isOpen) && "show"}`}>
      <UserInfo user={user} />
      <SideBarRequirements requirements={requirements} />
      <SupportLinks />
    </section>
  )
}

export default SideBar
