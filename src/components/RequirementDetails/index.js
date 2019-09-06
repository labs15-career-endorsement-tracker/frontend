import React from "react"

import StepList from "../steps/StepList"
import ResourceCardContainer from "../Resource/ResourceCardContainer"

const RequirementDetail = props => {
  const test = props.location.pathname
  return (
    <div className="requirement-detail-container">
      <StepList
        steps={["asdsdasdadasasd", "asdasdsad"]}
        toggle={() => console.log("hi")}
        fetchRequirements={() => console.log("hey")}
      />
      <ResourceCardContainer />
    </div>
  )
}

export default RequirementDetail
