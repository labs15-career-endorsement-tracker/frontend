import React from "react"
import { CheckMark } from "./svg/CheckMark"
import { loadFromLocalStorage, loadAuthDataFromLocalStorage } from "../../store"

const Step = ({ step, toggle, user, fetchUser }) => {
  console.log(fetchUser)
  const { token } = loadFromLocalStorage("auth")

  const handleToggle = async () => {
    const { token } = loadAuthDataFromLocalStorage()
    await toggle(token, step.tasks_id, step.id, step.is_complete)
    await fetchUser(token, user.id)
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
