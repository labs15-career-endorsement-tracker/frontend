import React from "react"

const ReqCard = ({ requirement }) => {
  return (
    <div className="requirement-card">
      <h2 className="title">{requirement.title}</h2>
      <p className="description">{requirement.tasks_description}</p>
    </div>
  )
}

export default ReqCard
