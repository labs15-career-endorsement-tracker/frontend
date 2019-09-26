import React, { useEffect } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import MyAccount from "../../pages/MyAccount"
import RequirementsList from "../../pages/RequirementsList"
import RequirementDetails from "../../pages/RequirementDetails"
import Forbidden from "../../pages/Forbidden"
import StudentProfile from "../../pages/StudentProfile"
import { Sidebar } from "../../layout"
import { CoachRoute, StudentRoute, PublicRoute } from "../../routes"
import MyStudents from "../../pages/MyStudents"

import { loadAuthDataFromLocalStorage } from "../../../store"
import { fetchUser, fetchRequirements } from "../../../actions"

import "./index.scss"

const DashboardLayout = ({ match, isOpen, width }) => {
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
      <Sidebar isOpen={isOpen} width={width}></Sidebar>
      <Switch>
        <StudentRoute
          path={`${match.path}requirements/:id`}
          component={RequirementDetails}
        ></StudentRoute>
        <StudentRoute
          path={`${match.path}requirements`}
          component={RequirementsList}
        ></StudentRoute>
        <CoachRoute
          path={`${match.path}students`}
          component={MyStudents}
        ></CoachRoute>
        <Route path={`${match.path}profile`} component={MyAccount}></Route>
        <CoachRoute
          path={`${match.path}student`}
          component={StudentProfile}
        ></CoachRoute>
        <PublicRoute path="/forbidden" component={Forbidden}></PublicRoute>
        <Redirect
          to={
            user.is_admin
              ? `${match.path}students`
              : `${match.path}requirements`
          }
        ></Redirect>
      </Switch>
    </div>
  )
}

export default DashboardLayout
