import React, { useEffect } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import MyAccount from "../../pages/MyAccount"
import RequirementsList from "../../pages/RequirementsList"
import RequirementDetails from "../../pages/RequirementDetails"
import FindStudent from "../../pages/FindStudent"
import Forbidden from "../../pages/Forbidden"
import { DashboardHeader } from "../../lib"
import { Sidebar } from "../../layout"
import CoachRoute from "../../CoachRoute"

import { loadAuthDataFromLocalStorage } from "../../../store"
import { fetchUser, fetchRequirements } from "../../../actions"

import "./index.scss"

const DashboardLayout = ({ match }) => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.userReducer.user)
  
  useEffect(() => {
    const { token, userId } = loadAuthDataFromLocalStorage()

    Promise.all([
      dispatch(fetchUser(token, userId)),
      dispatch(fetchRequirements(token))
    ])
  }, [dispatch])
  return (
    <div className="dashboard">
      <DashboardHeader></DashboardHeader>
      <Sidebar></Sidebar>
      <main className="dashboard-content">
        <Switch>
          <Route
            path={`${match.path}requirements/:id`}
            component={RequirementDetails}
          ></Route>
          <Route
            path={`${match.path}requirements`}
            component={RequirementsList}
          ></Route>
          <CoachRoute
            path={`${match.path}students`}
            component={FindStudent}
          ></CoachRoute>
          <Route path={`${match.path}profile`} component={MyAccount}></Route>
          <Route path="/forbidden" component={Forbidden}></Route>
          <Redirect
            to={
              user.is_admin
                ? `${match.path}students`
                : `${match.path}requirements`
            }
          ></Redirect>
        </Switch>
      </main>
    </div>
  )
}

export default DashboardLayout
