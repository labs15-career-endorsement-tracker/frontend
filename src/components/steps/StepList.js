import React, { useState, useEffect } from "react"

import Step from "./Step"

const StepList = props => {
  const [steps, setSteps] = useState([])

  useEffect(() => {
    setSteps(props.steps)
  }, [props.steps])

  return (
    <div className="step-list-container">
      <h1 className="title">Steps to complete</h1>
      <div className="step-list">
        {steps.map(step => (
          <Step
            key={step.id}
            step={step}
            toggle={props.toggle}
            fetchRequirements={props.fetchRequirements}
          />
        ))}
      </div>
    </div>
  )
}

export default StepList
