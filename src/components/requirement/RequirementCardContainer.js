import React, { useState, useEffect } from "react"

import ReqCard from "./ReqCard"

import { fetchRequirements } from "../../actions"
import { loadAuthDataFromLocalStorage } from "../../store"
import { connect } from "react-redux"

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
