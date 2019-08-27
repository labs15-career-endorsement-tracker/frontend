import React from "react"
import { Link } from "react-router-dom"

import "../styles/navigation.css"

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="links">
        <Link to="/" className="link">
          Login
        </Link>
        <Link to="/sign-up" className="link">
          Sign Up
        </Link>
      </ul>
    </nav>
  )
}

export default Navigation
