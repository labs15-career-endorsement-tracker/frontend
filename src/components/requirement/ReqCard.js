import React from "react"

import StepGauge from "../../components/steps/StepGauge"

import { history } from "../../store"

const ReqCard = ({ requirement }) => {
  return (
    <div
      className="requirement-card"
      onClick={() => history.push(`/requirements/${requirement.id}`)}
    >
      <StepGauge requirement={requirement} />
      <div
        className={`title-area ${
          requirement.progress === 100 ? "complete" : "incomplete"
        }`}
      >
        <h2
          className={`title ${
            requirement.progress === 100 ? "white-text" : ""
          }`}
        >
          {requirement.title}
          {requirement.progress === 100 && <div className="icon-circle"><i className="fas fa-check"></i></div>}
        </h2>
      </div>
    </div>
  )
}

export default ReqCard
