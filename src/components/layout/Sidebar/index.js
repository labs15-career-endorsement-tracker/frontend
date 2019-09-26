import React, {useEffect, useState} from "react"

import "./index.scss"

import { SupportLinks, SidebarHeader, SidebarMenu, Logo, MenuBurger } from "../../lib"
import {useMenu} from "../../../hooks"

const Sidebar = () => {
  const {isOpen, width} = useMenu()
  const [left, setLeft] = useState('-2000px')
  const [position, setPosition] = useState("absolute")
  useEffect(() => {
    if (width > 768) {
      setLeft(0)
      setPosition('sticky')
    }
    else if (isOpen) {
      setLeft(0)
      setPosition('fixed')
    }
    else {
      setLeft('-2000px')
      setPosition('absolute')
    }
  }, [width, isOpen])
  return (
    <aside className="dashboard-sidebar" style={{left: left, position: position}}>
      <div className="logo-area">
      <Logo></Logo>
      {width <= 768 && <MenuBurger isOpen={isOpen} />}
      </div>
      <SidebarHeader></SidebarHeader>
      <SidebarMenu></SidebarMenu>
      <SupportLinks></SupportLinks>
    </aside>
  )
}

export default Sidebar
