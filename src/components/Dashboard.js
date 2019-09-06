import React from "react"
import { connect } from "react-redux"
import { Redirect, Route, Switch } from "react-router-dom"

// Functions
import { toggleStep, fetchRequirements, fetchUser } from "../actions"

// Components
import UserInfo from "./UserInfo"
import RequirementCardContainer from "./requirement/RequirementCardContainer"
import StepList from "./steps/StepList"
import Navigation from "./Navigation"
import RequirementDetails from "./RequirementDetails"
import NotFound from "./NotFound"

const Dashboard = props => {
  return (
    <div className="dash-container">
      <Navigation fetchUser={props.fetchUser} user={props.user}/>
      <UserInfo fetchUser={props.fetchUser} user={props.user} userInProgress={props.userInProgress}/>
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
    stepsByTask: state.stepReducer.stepsByTask,
    user: state.userReducer.user,
    userInProgress: state.userReducer.inProgress
  }
}

export default connect(
  mapStateToProps,
  { toggleStep, fetchRequirements, fetchUser }
)(Dashboard)
