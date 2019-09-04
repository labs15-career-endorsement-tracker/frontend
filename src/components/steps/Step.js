import React from "react"
import { CheckMark } from "./svg/CheckMark"
import { loadFromLocalStorage } from '../../store'


const Step = ({ step, toggle }) => {
const {token} = loadFromLocalStorage('auth')

  return (
    <div className="each-step">
      <div
        className="check-box"
        onClick={() => toggle(token, step.tasks_id, step.id, step.is_complete)}
      >
        <div className={step.is_complete ? "complete" : "incomplete"}>
          <CheckMark />
        </div>
      </div>
      <div className="description">{step.steps_description}</div>
    </div>
  )
}

export default Step
