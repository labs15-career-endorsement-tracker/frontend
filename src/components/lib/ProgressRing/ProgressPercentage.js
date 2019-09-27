import React from "react"

const ProgressPercentage = ({ progressValue = 0 }) => {
  return (
    <div className="progress-ring__content">
      <p className="progress-number">{progressValue}</p>
      <span className="progress-label">%</span>
    </div>
  )
}

export default ProgressPercentage
