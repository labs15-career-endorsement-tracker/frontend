import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"

import Step from "./Step"
import { toggleStep, fetchSteps, fetchRequirements } from "../../actions"
import { loadAuthDataFromLocalStorage } from "../../store"

const StepList = ({
  fetchSteps,
  toggleStep,
  stepsByTask,
  match,
  fetchRequirements,
  requirementsArray
}) => {
  const [steps, setSteps] = useState([])
  const [reqs, setReqs] = useState([])
  const [task, setTask] = useState({})

  const taskId = Number(match.params.id)

  useEffect(() => {
    const { token } = loadAuthDataFromLocalStorage()
    fetchSteps(token, taskId)
    fetchRequirements(token)
  }, [fetchSteps, taskId, fetchRequirements])

  useEffect(() => {
    setSteps(stepsByTask)
    setReqs(requirementsArray)
    const getTaskNameById = async () => {
      let task = await reqs.filter(task => Number(task.id) === taskId).pop()
      setTask(task)
    }
    getTaskNameById()
  }, [stepsByTask, requirementsArray, reqs, taskId])

  // getTaskNameById().then(res => console.log(res))

  return (
    <div className="step-list-container">
      <h1 className="title">{task ? task.title : ""}</h1>
      <div className="step-list">
        {steps.map(step => (
          <Step key={step.id} step={step} toggle={toggleStep} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    inProgress: state.stepReducer.inProgress,
    stepsByTask: state.stepReducer.stepsByTask,
    requirementsArray: state.requirementReducer.requirements
  }
}

export default connect(
  mapStateToProps,
  { toggleStep, fetchSteps, fetchRequirements }
)(withRouter(StepList))
