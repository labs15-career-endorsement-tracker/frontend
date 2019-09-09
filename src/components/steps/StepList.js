import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { NavLink } from "react-router-dom"

import Step from "./Step"
import {
  toggleStep,
  fetchSteps,
  fetchRequirements,
  fetchUser
} from "../../actions"
import { loadAuthDataFromLocalStorage } from "../../store"

const StepList = ({
  fetchSteps,
  toggleStep,
  stepsByTask,
  match,
  fetchUser,
  fetchRequirements,
  requirements
}) => {
  const { token } = loadAuthDataFromLocalStorage()
  const taskId = Number(match.params.id)
  const requirement = requirements.find(req => Number(req.id) === taskId)
  const [steps, setSteps] = useState([])

  useEffect(() => {
    ;(async function() {
      await fetchRequirements(token)
    })()
  }, [fetchRequirements, token])

  useEffect(() => {
    fetchSteps(token, taskId)
  }, [fetchSteps, taskId, token])

  useEffect(() => {
    setSteps(stepsByTask)
  }, [stepsByTask])
  return (
    <div className="step-list-container">
      <h1 className="title">
        {requirement ? requirement.title : "Steps to complete"}
      </h1>
      <div className="step-list">
        {steps.map(step => (
          <Step
            key={step.id}
            step={step}
            toggle={toggleStep}
            fetchUser={fetchUser}
          />
        ))}
        <div className="return-requirements-container">
          <NavLink to="/" className="back-link">
            <span className="return-text">Return to requirements</span>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    inProgress: state.stepReducer.inProgress,
    stepsByTask: state.stepReducer.stepsByTask,
    user: state.userReducer.user,
    requirements: state.requirementReducer.requirements
  }
}

export default connect(
  mapStateToProps,
  { toggleStep, fetchSteps, fetchUser, fetchRequirements }
)(withRouter(StepList))
