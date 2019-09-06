import React from "react"
import { loadFromLocalStorage } from "../../store"

import StepGauge from "../../components/steps/StepGauge"

const ReqCard = ({ requirement, fetchSteps, steps }) => {
  return (
    <div className="requirement-card" onClick={() =>
      fetchSteps(loadFromLocalStorage("auth").token, requirement.id)
    }>
      <StepGauge steps={steps} requirement={requirement} />
      <div className={`title-area ${requirement.progress === 100 ? 'complete' : 'incomplete'}`}>
      <h2 className={`title ${requirement.progress === 100 ? 'white-text' : ''}`}>{requirement.progress === 100 && <i className="fas fa-check"></i> }{requirement.title}</h2>
      </div>
    </div>
  )
}

export default ReqCard
