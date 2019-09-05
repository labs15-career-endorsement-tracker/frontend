import React, { useState, useEffect } from "react"

import ReqCard from "./ReqCard"

import { fetchRequirements, fetchSteps } from "../../actions"
import { loadAuthDataFromLocalStorage } from "../../store"
import { connect } from "react-redux"

const RequirementCardContainer = ({requirements, fetchSteps, fetchRequirements }) => {
  const [reqs, setReqs] = useState([])

  useEffect(() => {
    const { token } = loadAuthDataFromLocalStorage()
    fetchRequirements(token)
  }, [fetchRequirements])

  useEffect(() => {
    setReqs(requirements)
  }, [requirements])

  return (
    <div className="requirement-card-container">
      <div className="component-title">
        <h1>Requirements</h1>
      </div>
      <div className="req-card-area">
        <div className="req-card">
          
          {reqs.map(reg => (
            <ReqCard
              key={reg.id}
              requirement={reg}
              fetchSteps={fetchSteps}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    inProgress: state.requirementReducer.inProgress,
    requirements: state.requirementReducer.requirements,
  }
}

export default connect(
  mapStateToProps,
  { fetchRequirements, fetchSteps }
)(RequirementCardContainer)
