import React from "react"
import { Route } from "react-router-dom"

import { useMenu } from "../../hooks/"
import { Sidebar } from "../layout"

const PublicRoute = ({ component: Component, ...rest }) => {
  const { isOpen, width } = useMenu()
  return <Route {...rest} render={(props) => {
    if (width <= 768 && isOpen) { return <Sidebar {...props} isOpen={isOpen} width={width} /> }
    else {
      return <Component {...props} width={width} isOpen={isOpen} />
    }
  }}></Route>
}

export default PublicRoute
