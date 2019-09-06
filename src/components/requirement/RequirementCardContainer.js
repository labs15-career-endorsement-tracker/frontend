import React, { useState, useEffect } from "react"

import ReqCard from "./ReqCard"

import { fetchRequirements } from "../../actions"
import { loadAuthDataFromLocalStorage } from "../../store"
import { connect } from "react-redux"

const RequirementCardContainer = ({ requirements, fetchRequirements }) => {
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
      {reqs.map(req => (
        <div key={req.id} className="req-card-area">
          <ReqCard requirement={req} />
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    inProgress: state.requirementReducer.inProgress,
    requirements: state.requirementReducer.requirements
  }
}

export default connect(
  mapStateToProps,
  { fetchRequirements }
)(RequirementCardContainer)
