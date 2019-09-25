import React, { useEffect, useState } from "react"
import { connect } from "react-redux"

import {
  toggleStep,
  fetchSteps,
  fetchRequirements,
  fetchUser
} from "../../../actions"

import "./index.scss"

import { ResourceList, RequirementStepList, ProgressRing } from "../../lib"

import { loadAuthDataFromLocalStorage } from "../../../store"

const RequirementDetail = ({
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
  return (
    <div className="requirement-detail-container">
      <div className="list-header">
        <div className="step-description">
          <h1 className="title">
            {requirement ? requirement.title : "Steps to complete"}
          </h1>
          <p>{requirement ? requirement.tasks_description : ""}</p>
        </div>
        <ProgressRing
          progressValue={requirement ? requirement.progress : 0}
        ></ProgressRing>
      </div>
      <div className="resources-steps">
        <RequirementStepList
          steps={steps}
          requirement={requirement}
          fetchUser={fetchUser}
          toggleStep={toggleStep}
        />
        <ResourceList></ResourceList>
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
)(RequirementDetail)
