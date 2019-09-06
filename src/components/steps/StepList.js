import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { withRouter } from "react-router"

import Step from "./Step"
import { getRequirements } from "../../api"
import { getSteps } from "../../api"
import { loadAuthDataFromLocalStorage } from "../../store"

const StepList = props => {
  console.log(props.match.params.id)
  let test = Number(props.match.params.id)

  const [steps, setSteps] = useState([])
  useEffect(() => {
    getSteps(loadAuthDataFromLocalStorage().token, test).then(requirements => {
      console.log(requirements)
      setSteps(requirements)
    })
    // setSteps(props.steps)
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

export default withRouter(StepList)
