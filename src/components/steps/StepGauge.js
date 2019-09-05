import React, { useState, useEffect } from "react"

import "./index.scss"

const StepGauge = ({ steps }) => {
  const [totalSteps, setTotalSteps] = useState(null)
  const [stepsComplete, setStepsComplete] = useState(null)
  console.log(steps)

  useEffect(() => {
    setTotalSteps(steps.length)
    setStepsComplete(steps.filter(step => step.is_complete === true).length)
  }, [steps])

  const getTaskProgress = () => {
    console.log(Math.round((stepsComplete / totalSteps) * 100).toString())
    return Math.round((stepsComplete / totalSteps) * 100).toString()
  }

  const gaugeStyle = {
    width: getTaskProgress() + "%"
  }

  console.log(totalSteps, stepsComplete)
  return (
    <div className="gauge-container">
      <div className="gauge-fill" style={gaugeStyle}></div>
    </div>
  )
}

export default StepGauge
