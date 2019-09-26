import React from "react"
import { Route } from "react-router-dom"

import {useMenu} from "../../hooks/"
import { Sidebar } from "../layout"

const PublicRoute = ({component: Component, ...rest}) => {
  const isOpen = useMenu()
  return <Route {...rest} render={(props) => {
    if (isOpen) return <Sidebar {...props} isOpen />
    return <Component {...props}/>
  }}></Route>
}

export default PublicRoute
