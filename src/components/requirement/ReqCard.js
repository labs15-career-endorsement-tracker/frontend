import React from "react"

const ReqCard = ({ requirement, getStepsByTaskId }) => {
  return (
    <div className="requirement-card">
      <h2 className="title">{requirement.title}</h2>
      <p className="description">{requirement.tasks_description}</p>
      <div
        className='view-steps'
        onClick={() => getStepsByTaskId(requirement.id)}
      >View Steps
      </div>
    </div>
  )
}

export default ReqCard
