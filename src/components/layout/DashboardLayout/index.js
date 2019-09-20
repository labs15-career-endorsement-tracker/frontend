import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

import "./index.scss"

import MyAccount from "../../pages/MyAccount"
import RequirementsList from "../../pages/RequirementsList"
import RequirementDetails from "../../pages/RequirementDetails"
import FindStudent from "../../pages/FindStudent"
import { DashboardHeader } from "../../lib"
import { Sidebar } from "../../layout"

const DashboardLayout = ({ match }) => {
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
<<<<<<< HEAD
          <Route
            path={`${match.path}find-student`}
            component={FindStudent}
          ></Route>
=======
          <Route path={`${match.path}myaccount`} component={MyAccount}></Route>
>>>>>>> 593d5643a8f7fd1142826718e6e7d1fd57ed68df
          <Redirect to={`${match.path}requirements`}></Redirect>
        </Switch>
      </main>
    </div>
  )
}

export default DashboardLayout
