import React from "react"
import { CheckMark } from "./svg/CheckMark"
import { loadFromLocalStorage } from "../../store"

const Step = ({ step, toggle }) => {
  const { token } = loadFromLocalStorage("auth")

  const handleToggle = async () => {
    await toggle(token, step.tasks_id, step.id, step.is_complete)
  }

  return (
    <div className="each-step">
      <div className="check-box" onClick={handleToggle}>
        <div className={step.is_complete ? "complete" : "incomplete"}>
          <CheckMark />
        </div>
      </div>
      <div className="description">{step.steps_description}</div>
    </div>
  )
}

export default Step
