import React from "react"
import { loadFromLocalStorage } from '../../store'

const ReqCard = ({ requirement, fetchSteps }) => {

  return (
    <div className="requirement-card">
      <h2 className="title">{requirement.title}</h2>
      <p className="description">{requirement.tasks_description}</p>
      <div
        className="view-steps"
        onClick={() => fetchSteps(loadFromLocalStorage('auth').token, requirement.id)}
      >
        View Steps
      </div>
    </div>
  )
}

export default ReqCard
