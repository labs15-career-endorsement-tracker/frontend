import React from "react"
import { Link } from "react-router-dom"

import "./index.scss"

const FormHeader = ({
  title = "",
  prompt = "",
  redirectTo = "",
  redirectText = ""
}) => {
  return (
    <header className="form-header">
      <h1>{title}</h1>
      <p>
        {prompt} <Link to={redirectTo}>{redirectText}</Link>
      </p>
    </header>
  )
}

export default FormHeader
