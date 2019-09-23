import React from "react"
import { useSelector } from "react-redux"
import { Redirect, Route } from "react-router-dom"

const CoachRoute = props => {
  const user = useSelector(state => state.userReducer.user)

  if (!user) return <Redirect to="/forbidden"></Redirect>

  if (!user.is_admin) return <Redirect to="/forbidden"></Redirect>

  return <Route {...props}></Route>
}

export default CoachRoute
