import React from "react"

import { withRouter } from "react-router"

import "./index.scss"

import { RequirementStep } from "../../lib"

const StepList = ({ requirement, steps, toggleStep, fetchUser }) => {
  // if (!requirement) return <Redirect to="/requirements"></Redirect>
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
      </div>
    </div>
  )
}

export default withRouter(StepList)
