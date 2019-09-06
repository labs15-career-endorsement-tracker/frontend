import React from "react"

// import StepList from "../steps/StepList"
import ResourceCardContainer from "../Resource/ResourceCardContainer"
import StepCardContainer from "../StepsList/StepCardContainer"

const RequirementDetail = props => {
  const test = props.location.pathname
  return (
    <div className="requirement-detail-container">
      {/* <StepList
        steps={["asdsdasdadasasd", "asdasdsad"]}
        toggle={() => console.log("hi")}
        fetchRequirements={() => console.log("hey")}
      /> */}
      <StepCardContainer />
      <ResourceCardContainer />
    </div>
  )
}

export default RequirementDetail
