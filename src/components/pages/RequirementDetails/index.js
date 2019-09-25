import React, { useEffect, useState } from "react"
import { connect } from "react-redux"

import {
  toggleStep,
  fetchSteps,
  fetchRequirements,
  fetchUser
} from "../../../actions"

import "./index.scss"

import { ResourceList, RequirementStepList } from "../../lib"
import { ContentHeader, DashboardContent } from "../../layout"

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
    <DashboardContent>
      <ContentHeader
        title={requirement ? requirement.title : "Steps to complete"}
        prompt={requirement ? requirement.tasks_description : ""}
        progress={requirement ? requirement.progress : 0}
      ></ContentHeader>
      <div className="requirement-detail-container">
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
    </DashboardContent>
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
