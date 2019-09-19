import React from "react"
import { loadAuthDataFromLocalStorage } from "../../../store"

import "./index.scss"

const RequirementStep = ({ step, toggle, fetchUser }) => {
  const handleToggle = async () => {
    const { userId, token } = loadAuthDataFromLocalStorage()
    await toggle(token, step.tasks_id, step.id, step.is_complete)
    await fetchUser(token, userId)
  }

  return (
    <div className="each-step">
      <div className="check-box" onClick={handleToggle}>
        <div className={step.is_complete ? "complete" : "incomplete"}>
          <i className="fas fa-check"></i>
        </div>
      </div>
      <div className="description">{step.steps_description}</div>
    </div>
  )
}

export default RequirementStep
