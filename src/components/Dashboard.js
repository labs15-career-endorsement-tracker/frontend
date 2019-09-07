import React from "react"
import { connect } from "react-redux"
import { Route, Switch } from "react-router-dom"

// Functions
import { toggleStep, fetchRequirements } from "../actions"

// Components
import UserInfo from "./UserInfo"
import RequirementCardContainer from "./requirement/RequirementCardContainer"
import Navigation from "./Navigation"
import RequirementDetails from "./RequirementDetails"
import NotFound from "./NotFound"

const Dashboard = props => {
  return (
    <div className="dash-container">
      <Navigation />
      <UserInfo />
      <Switch>
        <Route
          exact
          path="/requirements/:id"
          component={RequirementDetails}
        ></Route>
        <Route exact path="/" component={RequirementCardContainer}></Route>
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    inProgress: state.stepReducer.inProgress,
    stepsByTask: state.stepReducer.stepsByTask
  }
}

export default connect(
  mapStateToProps,
  { toggleStep, fetchRequirements }
)(Dashboard)
