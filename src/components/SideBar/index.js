import React from "react"

import "./index.scss"
import "@animated-burgers/burger-rotate/dist/styles.css"

const SideBar = ({ isOpen, width }) => {
  return (
    <section
      className={`sidebar ${(width > 768 || isOpen) && "show"}`}
    ></section>
  )
}
export default SideBar
