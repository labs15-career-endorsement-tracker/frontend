import React from "react"

import "./index.scss"

const FormInstructions = ({ text = "" }) => {
  return <p className="instructions">{text}</p>
}

export default FormInstructions
