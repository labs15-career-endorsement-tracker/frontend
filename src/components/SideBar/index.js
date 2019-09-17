import React, { useState, useEffect } from "react"
import Burger from "@animated-burgers/burger-rotate"

import "./index.scss"
import "@animated-burgers/burger-rotate/dist/styles.css"
import Logo from "../lib/Logo"
import Dropdown from "../lib/Dropdown"
import Flyout from "../lib/Dropdown/Flyout"
import { history } from "../../store"

const Navigation = ({ user }) => {
  const [width, setWidth] = useState(window.innerWidth)
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      return setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    if (width > 768) setIsOpen(true)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [width])
//   const triggerLogout = () => {
//     localStorage.removeItem("auth")
//     history.push("/sign-in")
//   }
//   const triggerDropdown = () => {
//     setTimeout(() => setIsOpen(false), 400)
//   }
if (width > 768) {
  return <section className="sidebar">
      
  </section>
}
  return (
    <>
    </>
    
  )
}
export default Navigation
