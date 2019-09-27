import React from "react"
import { useSelector } from "react-redux"
import { Redirect, Route } from "react-router-dom"

import { useLogout } from "../../hooks"

const StudentRoute = props => {
  const user = useSelector(state => state.userReducer.user)

  useLogout()

  if (user.is_admin) return <Redirect to="/"></Redirect>

  return <Route {...props}></Route>
}

export default StudentRoute
