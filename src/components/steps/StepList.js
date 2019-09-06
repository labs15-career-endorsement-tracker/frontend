import React, { useState, useEffect } from "react"
import { useSelector, connect } from "react-redux"
import { withRouter } from "react-router"

import Step from "./Step"
import { toggleStep, fetchSteps, fetchUser } from "../../actions"
// import { getRequirements } from "../../api"
// import { getSteps } from "../../api"
import { loadAuthDataFromLocalStorage } from "../../store"

const StepList = ({ fetchSteps, toggleStep, stepsByTask, match, user, fetchUser }) => {
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
            user={user}
            fetchUser={fetchUser}
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
    stepsByTask: state.stepReducer.stepsByTask,
    user: state.userReducer.user
  }
}

export default connect(
  mapStateToProps,
  { toggleStep, fetchSteps, fetchUser }
)(withRouter(StepList))
