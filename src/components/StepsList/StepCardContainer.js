import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { fetchSteps } from "../../actions"
import { loadAuthDataFromLocalStorage } from "./../../store"
import { withRouter } from "react-router"

// Components
import StepCard from "./StepCard"

// Styles
import "../../styles/index.scss"

const StepCardContainer = props => {
  console.log(props.match.params.id)
  const param = Number(props.match.params.id)
  const [stepsByTask, setStepsByTask] = useState([])
  const [isServerError, setIsServerError] = useState(false)
  const [serverError, setServerError] = useState({
    message: "",
    name: "",
    statusCode: ""
  })

  useEffect(() => {
    const { token } = loadAuthDataFromLocalStorage()
    props.fetchSteps(token, param)
  }, [])

  useEffect(() => {
    setIsServerError(props.isServerError)
    setServerError(props.serverError)
    console.log("steps", props.stepsByTask)
  }, [props.stepsByTask, props.serverError, props.isServerError])

  return (
    <div className="temp-container">
      {stepsByTask.map(res => (
        <div className="step-card-container">
          <div className="step-header">
            <h1>Steps</h1>
          </div>
          <div className="step-cards">
            <StepCard
              key={res.stepId}
              requirement={res.stepId}
              stepsByTask={res.stepsByTask}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    inProgress: state.stepsReducer.inProgress,
    stepsByTask: state.stepsReducer.stepsByTask,
    serverError: state.stepsReducer.serverError,
    isServerError: state.stepsReducer.isServerError
  }
}

export default connect(
  mapStateToProps,
  { fetchSteps }
)(withRouter(StepCardContainer))

// export default StepCardContainer
