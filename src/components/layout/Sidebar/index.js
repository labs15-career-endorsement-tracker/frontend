import React, {useEffect, useState} from "react"

import "./index.scss"

import { SupportLinks, SidebarHeader, SidebarMenu, Logo } from "../../lib"

const Sidebar = ({isOpen, width}) => {
  console.log(isOpen, width)
  const [display, setDisplay] = useState('none')
  useEffect(() => {
    console.log(width, isOpen)
    if (width > 768) {
      setDisplay('flex')
    }
    else if (isOpen) {
      setDisplay('flex')
    }
    else {
      setDisplay('none')
    }
  }, [width, isOpen])
  return (
    <aside className="dashboard-sidebar" style={{display: display}}>
      <Logo></Logo>
      <SidebarHeader></SidebarHeader>
      <SidebarMenu></SidebarMenu>
      <SupportLinks></SupportLinks>
    </aside>
  )
}

export default Sidebar
