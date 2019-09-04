import React, { useState, useEffect } from "react"

import Step from "./Step"
import StepGauge from "./StepGauge"

const StepList = props => {
  console.log(props)
  const [steps, setSteps] = useState([])

  useEffect(() => {
    setSteps(props.steps)
  }, [props.steps])

  return (
    <div className="step-list-container">
      <StepGauge steps={steps} />
      <h1 className="title">Steps to complete</h1>
      <div className="step-list">
        {steps.map(step => (
          <Step key={step.id} step={step} toggle={props.toggle} />
        ))}
      </div>
    </div>
  )
}

export default StepList
