import React from "react"

import "../../styles/index.scss"

const StepCard = props => {
  console.log("props from StepCard", props.steps)
  const renderIcon = isComplete => {
    switch (isComplete) {
      case false:
        return <i className="far fa-square fa-2x"></i>
      case true:
        return <i className="fab fa-check-square fa-2x"></i>
      default:
        return <i className="far fa-square fa-2x"></i>
    }
  }

  return (
    <div className="step-card">
      {props.steps.map(step => (
        <div className="individual-step" key={step.stepId}>
          <div className="individual-step-icon">
            {renderIcon(step.isComplete)}
          </div>

          <div className="individual-steps-description">
            <p className="resource-url">{step.steps_description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StepCard
