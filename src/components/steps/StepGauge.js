import React, { useState, useEffect } from "react"

import "./index.scss"

const StepGauge = ({ requirement }) => {
//   const [totalSteps, setTotalSteps] = useState(null)
//   const [stepsComplete, setStepsComplete] = useState(null)
  const [progress, setProgress] = useState('')

  useEffect(() => {
      setProgress(requirement.progress)
      console.log(progress)
  }, [progress])


//   useEffect(() => {
//     setTotalSteps(steps.length)
//     setStepsComplete(steps.filter(step => step.is_complete === true).length)
//   }, [steps])

  const getTaskProgress = () => {
    // console.log(Math.round((stepsComplete / totalSteps) * 100).toString())
    // return Math.round((stepsComplete / totalSteps) * 100).toString()
    return progress
  }

  const gaugeStyle = {
    width: progress + "%"
  }

//   console.log(totalSteps, stepsComplete)
  return (
    <div className="gauge-container">
      <div className="gauge-fill" style={gaugeStyle}></div>
    </div>
  )
}

export default StepGauge
