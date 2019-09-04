import React, { useState, useEffect } from "react"
import { connect } from "react-redux"

import { toggleStep } from "../../actions"

import Step from "./Step"
import StepGauge from "./StepGauge"

const StepList = props => {
  const [steps, setSteps] = useState([])
  // console.log(steps)

  useEffect(() => {
    setSteps(props.stepsByTask)
  }, [props.stepsByTask])

  return (
    <div className="step-list-container">
      <StepGauge steps={steps} />
      <h1 className="title">Steps to complete</h1>
      <div className="step-list">
        {steps.map(step => (
          <Step key={step.id} step={step} toggle={props.toggleStep} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    inProgress: state.stepReducer.inProgress,
    serverError: state.stepReducer.serverError,
    isServerError: state.stepReducer.isServerError,
    stepsByTask: state.stepReducer.stepsByTask
  }
}

export default connect(
  mapStateToProps,
  { toggleStep }
)(StepList)
