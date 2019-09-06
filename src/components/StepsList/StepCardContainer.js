import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { fetchSteps, toggleStep } from "../../actions"
import { loadAuthDataFromLocalStorage } from "./../../store"
import { withRouter } from "react-router"

// Components
import StepCard from "./StepCard"

// Styles
import "../../styles/index.scss"

const StepCardContainer = props => {
  console.log(props.match.params.id)
  const param = Number(props.match.params.id)
  const [steps, setSteps] = useState([])
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
    setSteps(props.steps)
    setIsServerError(props.isServerError)
    setServerError(props.serverError)
    console.log("steps", props.steps)
  }, [props.steps, props.serverError, props.isServerError])

  return (
    <div className="temp-container">
      {steps.map(res => (
        <div className="step-card-container">
          <div className="step-header">
            <h1>Steps</h1>
          </div>
          <div className="step-cards">
            <StepCard key={res.id} requirement={res.id} steps={res.steps} />
          </div>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    inProgress: state.stepsReducer.inProgress,
    steps: state.stepsReducer.stepsByTask,
    serverError: state.stepsReducer.serverError,
    isServerError: state.stepsReducer.isServerError
  }
}

export default connect(
  mapStateToProps,
  { fetchSteps, toggleStep }
)(withRouter(StepCardContainer))

// export default StepCardContainer
