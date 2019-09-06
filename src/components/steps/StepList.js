import React, { useState, useEffect } from "react"
import { useSelector, connect } from "react-redux"
import { withRouter } from "react-router"

import Step from "./Step"
import { toggleStep, fetchSteps } from "../../actions"
// import { getRequirements } from "../../api"
// import { getSteps } from "../../api"
import { loadAuthDataFromLocalStorage } from "../../store"

const StepList = ({ fetchSteps, toggleStep, stepsByTask, match }) => {
  console.log(match.params.id)
  let test = Number(match.params.id)

  const [steps, setSteps] = useState([])

  useEffect(() => {
    const { token } = loadAuthDataFromLocalStorage()
    fetchSteps(token, test)
  }, [fetchSteps])

  useEffect(() => {
    setSteps(stepsByTask)
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
            // fetchRequirements={props.fetchRequirements}
          />
        ))}
      </div>
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
  { toggleStep, fetchSteps }
)(withRouter(StepList))
