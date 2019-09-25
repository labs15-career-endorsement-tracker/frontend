import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"

import { MenuItem } from "../../lib"

import "./index.scss"

class MenuItemData {
  constructor(title, icon, path, children = [], user = null) {
    this.title = title
    this.icon = icon
    this.path = path
    this.children = children
    this.user = user
  }
}

const SidebarMenu = () => {
  const user = useSelector(state => state.userReducer.user)
  const requirements = useSelector(
    state => state.requirementReducer.requirements
  )
  const [menuData, setMenuData] = useState([])

  useEffect(() => {
    setMenuData(
      [
        new MenuItemData(
          "My Requirements",
          "fas fa-tasks-alt",
          "/requirements",
          requirements.map(
            requirement =>
              new MenuItemData(
                requirement.title,
                null,
                `/requirements/${requirement.id}`
              )
          ),
          "student"
        ),
        new MenuItemData(
          "My Students",
          "fas fa-users",
          "/students",
          [],
          "coach"
        ),
        new MenuItemData(
          "My Pinned Students",
          "fas fa-thumbtack",
          "/my-students",
          [],
          "coach"
        ),
        new MenuItemData("Account", "fas fa-user-circle", "/profile", [])
      ].filter(data => {
        switch (data.user) {
          case null:
            return true
          case "coach":
            return user.is_admin
          case "student":
            return !user.is_admin
          default:
            return false
        }
      })
    )
  }, [requirements, setMenuData, user.is_admin])

  return (
    <nav className="sidebar-menu">
      {menuData.map(navLink => (
        <MenuItem key={navLink.title} menuItem={navLink}></MenuItem>
      ))}
    </nav>
  )
}

export default SidebarMenu
