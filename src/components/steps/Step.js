import React from "react"
import { CheckMark } from "./svg/CheckMark"


const Step = ({ step, toggle }) => {
//   console.log("On page render: ", step.is_complete)

  return (
    <div className="each-step">
      <div className="check-box"
      onClick={() => toggle(step.tasks_id, step.id, step.is_complete)}
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
