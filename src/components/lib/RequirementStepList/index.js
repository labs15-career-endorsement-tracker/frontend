import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { withRouter, Redirect } from "react-router"
import { NavLink } from "react-router-dom"

import "./index.scss"

import { RequirementStep, AssignmentStep, ProgressRing } from "../../lib"

import {
  toggleStep,
  fetchSteps,
  fetchRequirements,
  fetchUser
} from "../../../actions"
import { loadAuthDataFromLocalStorage } from "../../../store"

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
  }, [fetchRequirements, token, stepsByTask])

  useEffect(() => {
    fetchSteps(token, taskId)
  }, [fetchSteps, taskId, token])

  useEffect(() => {
    setSteps(stepsByTask)
  }, [stepsByTask])

  if (!requirement) return <Redirect to="/requirements"></Redirect>
  return (
    <div className="step-list-container">
      <div className="list-header">
        <div className="icon-title">
          <i className="fad fa-clipboard-list-check"></i>
          <h1 className="title">
            {requirement ? requirement.title : "Steps to complete"}
          </h1>
        </div>
        <ProgressRing
          progressValue={requirement ? requirement.progress : 0}
        ></ProgressRing>
        {/* <Percentage progress={requirement ? requirement.progress : 0} /> */}
      </div>
      <div className="step-description">
        <p>{requirement.tasks_description}</p>
      </div>
      <div className="step-list">
        {steps.map(step => (
          <RequirementStep
            key={step.id}
            step={step}
            toggle={toggleStep}
            fetchUser={fetchUser}
          />
        ))}
        <AssignmentStep />
        <div className="return-requirements-container">
          <div className="return-box">
            <NavLink to="/" className="back-link">
              <i className="fad fa-long-arrow-left"></i>
              <span className="return-text">Return to requirements</span>
            </NavLink>
          </div>
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
