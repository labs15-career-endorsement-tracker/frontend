import React from "react"
import { CheckMark } from "./svg/CheckMark"
import { loadAuthDataFromLocalStorage } from "../../store"

const Step = ({ step, toggle, fetchUser }) => {
  const handleToggle = async () => {
    const { userId, token } = loadAuthDataFromLocalStorage()
    await toggle(token, step.tasks_id, step.id, step.is_complete)
    await fetchUser(token, userId)
  }

  return (
    <div className="each-step">
      <div className="check-box" onClick={handleToggle}>
        <div className={step.is_complete ? "complete" : "incomplete"}>
          {/* <i className="fad fa-check-square"></i> */}
          <i className="checkMark fad fa-check"></i>
        </div>
      </div>
      <div className="description">{step.steps_description}</div>
    </div>
  )
}

export default Step
