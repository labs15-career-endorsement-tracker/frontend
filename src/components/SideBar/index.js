import React, { useState, useEffect } from "react"
import Burger from "@animated-burgers/burger-rotate"

import "./index.scss"
import "@animated-burgers/burger-rotate/dist/styles.css"
import Logo from "../lib/Logo"
import Dropdown from "../lib/Dropdown"
import Flyout from "../lib/Dropdown/Flyout"
import { history } from "../../store"

const SideBar = ({ user , isOpen, setIsOpen, width}) => {
if (width > 768) {
  return <section className="sidebar">
      
  </section>
}
  return (
    <>
    </>
    
  )
}
export default SideBar
