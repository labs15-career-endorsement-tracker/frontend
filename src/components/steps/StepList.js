import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"

import Step from "./Step"
import { toggleStep, fetchSteps, fetchRequirements } from "../../actions"
import { loadAuthDataFromLocalStorage } from "../../store"

const StepList = ({ fetchSteps, toggleStep, stepsByTask, match, fetchRequirements, stateRequirements }) => {
  
  const [steps, setSteps] = useState([])
  const [requirements, setRequirements] = useState([])
  console.log(steps)
  console.log(requirements)

  const taskId = Number(match.params.id)
  
  useEffect(() => {
    const { token } = loadAuthDataFromLocalStorage()
    fetchSteps(token, taskId)
    fetchRequirements(token)
  }, [fetchSteps, taskId, fetchRequirements])

  useEffect(() => {
    setSteps(stepsByTask)
    setRequirements(stateRequirements)
  }, [stepsByTask])

  return (
    <div className="step-list-container">
      <h1 className="title">Steps to complete</h1>
      <div className="step-list">
        {steps.map(step => (
          <Step
            key={step.id}
            step={step}
            toggle={toggleStep}
          />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    inProgress: state.stepReducer.inProgress,
    stepsByTask: state.stepReducer.stepsByTask,
    // stateRequirements: state.requirements.requirements
  }
}

export default connect(
  mapStateToProps,
  { toggleStep, fetchSteps, fetchRequirements }
)(withRouter(StepList))
