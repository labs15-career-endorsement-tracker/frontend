import React, { useState } from "react"
import { NavLink } from "react-router-dom"

import "./index.scss"

const ChildMenuItem = ({ menuItem }) => {
  return (
    <NavLink
      key={menuItem.title}
      to={menuItem.path}
      activeClassName="is-active"
    >
      {menuItem.title}
    </NavLink>
  )
}

const MenuItem = ({ menuItem }) => {
  const hasChildren = menuItem.children.length > 0
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }

  return (
    <div className="menu-item">
      <NavLink
        to={menuItem.path}
        activeClassName="is-active"
        onClick={handleOpen}
      >
        <i className={menuItem.icon}></i>
        <p>{menuItem.title}</p>
        {hasChildren &&
          (isOpen ? (
            <i className="fas fa-angle-down"></i>
          ) : (
            <i className="fas fa-angle-right"></i>
          ))}
      </NavLink>
      {hasChildren && isOpen && (
        <div className="child-menu-items">
          {menuItem.children.map(subMenuItem => (
            <ChildMenuItem
              key={subMenuItem.title}
              menuItem={subMenuItem}
            ></ChildMenuItem>
          ))}
        </div>
      )}
    </div>
  )
}

export default MenuItem
