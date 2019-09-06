import React from "react"

import { Logo } from "../index"

import "./index.scss"

const FormLayout = ({ children, image }) => {
  return (
    <main>
      <div className="l-two-column">
        <div className="left">
          <Logo></Logo>
          {children}
        </div>

        <div className="right">
          <img src={image.url} alt={image.altText} />
        </div>
      </div>
    </main>
  )
}

export default FormLayout
