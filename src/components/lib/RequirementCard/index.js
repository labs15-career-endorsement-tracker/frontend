import React from "react"

import "./index.scss"

import { StepGauge } from "../../lib"

import { history } from "../../../store"

const RequirementCard = ({ requirement }) => {
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
          // data-tip
          // data-for={requirement.title}
        >
          {requirement.title}
          {requirement.progress === 100 && (
            <div className="icon-circle">
              <i className="fas fa-check"></i>
            </div>
          )}
        </h2>

        {/* {requirement.progress !== 100 && (
          <div className="requirement-description-container">
            <ReactTooltip
              id={requirement.title}
              className="requirement-description-tooltip"
              type="light"
            >
              <p className="requirement-description-text">{`${requirement.tasks_description}`}</p>
            </ReactTooltip>
          </div>
        )} */}
      </div>
    </div>
  )
}

export default RequirementCard
