import React from "react"

import ReqCard from "./ReqCard"

const RequirementCardContainer = ({ requirements, fetchRequirements }) => {
  return (
    <div className="requirement-card-container">
      {requirements.map(req => (
        <div key={req.id} className="req-card-area">
          <ReqCard requirement={req} />
        </div>
      ))}
    </div>
  )
}


export default RequirementCardContainer

