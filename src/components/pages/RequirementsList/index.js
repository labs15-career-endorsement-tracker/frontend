import React from "react"
import { useSelector } from "react-redux"

import "./index.scss"

import { RequirementCard } from "../../lib"

const RequirementsList = () => {
  const requirements = useSelector(
    state => state.requirementReducer.requirements
  )
  const { tracks_title } = useSelector(state => state.userReducer.user)

  return (
    <section className="requirement-card-container">
      <hgroup>
        <h2>Requirements</h2>
        <h3>{tracks_title}</h3>
      </hgroup>
      {requirements.map(req => (
        <div key={req.id} className="req-card-area">
          <RequirementCard requirement={req} />
        </div>
      ))}
    </section>
  )
}

export default RequirementsList
