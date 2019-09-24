import React, { useState, useEffect } from "react"

import { withRouter, Redirect } from "react-router"
import { NavLink } from "react-router-dom"

import "./index.scss"

import { RequirementStep, ProgressRing } from "../../lib"

// import { AssignmentStep } from "../../lib"

const StepList = ({
  requirement,
  steps,
  toggleStep,
  fetchUser
}) => {
  if (!requirement) return <Redirect to="/requirements"></Redirect>
  return (
    <div className="step-list-container">
      <div className="step-list">
        {steps.map(step => (
          <RequirementStep
            key={step.id}
            step={step}
            toggle={toggleStep}
            fetchUser={fetchUser}
          />
        ))}
        {/* We left this here in case you want it: it's part of an old design */}
        {/* <AssignmentStep /> */}
        <div className="return-requirements-container">
          <div className="return-box">
            <NavLink to="/" className="back-link">
              <i className="fad fa-long-arrow-left"></i>
              <span className="return-text">Return to requirements</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}



export default (withRouter(StepList))
