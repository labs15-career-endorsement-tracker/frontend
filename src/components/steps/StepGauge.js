import React, { useState, useEffect } from "react"

const StepGauge = ({ requirement }) => {
  const [progress, setProgress] = useState("")

  useEffect(() => {
    setProgress(requirement.progress)
  }, [requirement.progress])

  const gaugeStyle = {
    width: progress + "%"
  }

  return (
    <div className="gauge-container">
      <div
        className={`gauge-fill ${progress === 100 && "on-complete"}`}
        style={gaugeStyle}
      ></div>
    </div>
  )
}

export default StepGauge
