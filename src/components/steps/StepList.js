import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"

import Step from "./Step"
import { toggleStep, fetchSteps, fetchUser } from "../../actions"
import { loadAuthDataFromLocalStorage } from "../../store"

const StepList = ({
  fetchSteps,
  toggleStep,
  stepsByTask,
  match,
  fetchUser
}) => {
  const { token } = loadAuthDataFromLocalStorage()
  let test = Number(match.params.id)

  const [steps, setSteps] = useState([])

  useEffect(() => {
    fetchSteps(token, test)
  }, [fetchSteps, test, token])

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
            fetchUser={fetchUser}
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
    user: state.userReducer.user
  }
}

export default connect(
  mapStateToProps,
  { toggleStep, fetchSteps, fetchUser }
)(withRouter(StepList))
