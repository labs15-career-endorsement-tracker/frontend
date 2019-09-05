import React from "react"
import { connect } from "react-redux"

// Functions
import { toggleStep, fetchRequirements } from "../actions"

// Components
import UserInfo from "./UserInfo"
import RequirementCardContainer from "./requirement/RequirementCardContainer"
import StepList from "./steps/StepList"
import Navigation from "./Navigation"
import ResourceCardContainer from "./Resource/ResourceCardContainer"

const Dashboard = props => {
  return (
    <div className="dash-container">
      <Navigation />
      <UserInfo />
      <RequirementCardContainer />
      <StepList
        steps={props.stepsByTask}
        toggle={props.toggleStep}
        fetchRequirements={props.fetchRequirements}
      />
      <ResourceCardContainer />
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
