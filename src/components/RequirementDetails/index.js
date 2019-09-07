import React from "react"

import StepList from "../steps/StepList"
import ResourceCardContainer from "../Resource/ResourceCardContainer"

import "./index.scss"

const RequirementDetail = props => {
  return (
    <div className="requirement-detail-container">
      <StepList />
      <ResourceCardContainer />
    </div>
  )
}

export default RequirementDetail
