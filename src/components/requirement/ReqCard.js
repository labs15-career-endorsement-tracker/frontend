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
        </h2>
        {requirement.progress === 100 && (
          <div className="icon-circle">
            <i className="fas fa-check"></i>
          </div>
        )}
        {requirement.progress !== 100 && (
          <p>{`${requirement.tasks_description.substring(0, 50).trim()}...`}</p>
        )}
      </div>
    </div>
  )
}

export default ReqCard
