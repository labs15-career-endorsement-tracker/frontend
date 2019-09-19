import React from "react"

import "./index.scss"

const StepGauge = ({ progress }) => {
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
