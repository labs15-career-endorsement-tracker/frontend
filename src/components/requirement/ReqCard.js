import React from "react"
import { loadFromLocalStorage } from "../../store"

import StepGauge from "../../components/steps/StepGauge"

const ReqCard = ({ requirement, fetchSteps, steps }) => {
  return (
    <div className="requirement-card">
      <StepGauge steps={steps} requirement={requirement} />
      <div className={`title-area ${requirement.progress === 100 ? 'complete' : 'incomplete'}`}>
      <h2 className={`title ${requirement.progress === 100 ? 'white-text' : ''}`}>{requirement.progress === 100 && <i className="fas fa-check"></i> }{requirement.title}</h2>
      </div>
      {/* I was thinking this link could come out all together and the whole card should be a link to the next route */}
      {/* <div
        className="view-steps"
        onClick={() =>
          fetchSteps(loadFromLocalStorage("auth").token, requirement.id)
        }
      >
        View Steps
      </div> */}
    </div>
  )
}

export default ReqCard
