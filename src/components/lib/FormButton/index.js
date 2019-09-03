import React from "react"

import "./index.scss"

const FormButton = ({ children, ...rest }) => {
  return (
    <button className="form-btn" type="submit" {...rest}>
      {children}
    </button>
  )
}

export default FormButton
