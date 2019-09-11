import React from "react"
import { Link } from "react-router-dom"

import logo from "../../../assets/images/logo.svg"

const Logo = () => {
  return (
    <Link className="logo" to="/">
      <img src={logo} alt="ENDRSD Logo in Brand Green" />
    </Link>
  )
}

export default Logo
