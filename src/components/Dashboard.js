import React, { useState, useEffect } from "react"
import { connect } from "react-redux"

// Functions
import { toggleStep } from "../actions"

// Components
import UserInfo from "./UserInfo"
import RequirementCardContainer from "./requirement/RequirementCardContainer"
import StepList from "./steps/StepList"
import Navigation from "./Navigation"

const Dashboard = props => {
  console.log(props)

  return (
    <div className="dash-container">
      <Navigation />
      <UserInfo />
      <RequirementCardContainer steps={props.stepsByTask}/>
      <StepList steps={props.stepsByTask} toggle={props.toggleStep}/>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    inProgress: state.stepReducer.inProgress,
    serverError: state.stepReducer.serverError,
    isServerError: state.stepReducer.isServerError,
    stepsByTask: state.stepReducer.stepsByTask
  }
}

export default connect(
  mapStateToProps,
  { toggleStep }
)(Dashboard)
