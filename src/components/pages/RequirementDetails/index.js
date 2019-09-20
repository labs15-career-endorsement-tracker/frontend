import React from "react"

import "./index.scss"

import { ResourceList, RequirementStepList } from "../../lib"

const RequirementDetail = props => {
  return (
    <div className="requirement-detail-container">
      <RequirementStepList />
      <ResourceList></ResourceList>
    </div>
  )
}

export default RequirementDetail
