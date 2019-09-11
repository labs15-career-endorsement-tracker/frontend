import React, {useState} from "react"
import { history } from "../../../store"
import "./index.scss"
import Flyout from "./Flyout"

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const triggerDropdown = () => {
    setTimeout(() => setIsOpen(false), 400)
  }

  const triggerLogout = () => {
    localStorage.removeItem("auth")
    history.push("/sign-in")
  }

  return (
    <div className="dropdown-container">
      <button onClick={() => {console.log('click');setIsOpen(!isOpen)}} className="dropdown-button">
        <i className="far fa-angle-down fa-3x"></i>
      </button>
      <Flyout triggerDropdown={triggerDropdown} triggerLogout={triggerLogout} isOpen={isOpen}/>
    </div>
  )
}

export default Dropdown
