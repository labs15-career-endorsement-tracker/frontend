import React, { useState, useEffect } from "react"
import { connect } from "react-redux"

// Functions
import { toggleStep, fetchRequirements } from "../actions"

// Components
import UserInfo from "./UserInfo"
import RequirementCardContainer from "./requirement/RequirementCardContainer"
import StepList from "./steps/StepList"
import Navigation from "./Navigation"

const Dashboard = props => {

  const [steps, setSteps] = useState([])
  
  useEffect(() => {
    setSteps(props.stepsByTask)
  }, [props.stepsByTask])

  return (
    <div className="dash-container">
      <Navigation />
      <UserInfo />
      <RequirementCardContainer />
      <StepList steps={steps} toggle={props.toggleStep} fetchRequirements={props.fetchRequirements}/>
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
  { toggleStep, fetchRequirements }
)(Dashboard)
