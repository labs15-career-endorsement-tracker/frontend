import React from "react"
import { useSelector } from "react-redux"

import "./index.scss"

import { RequirementCard } from "../../lib"
import { ContentHeader, DashboardContent } from "../../layout"

const RequirementsList = () => {
  const requirements = useSelector(
    state => state.requirementReducer.requirements
  )
  const { tracks_title, progress } = useSelector(
    state => state.userReducer.user
  )

  return (
    <DashboardContent>
      <ContentHeader
        title="Requirements"
        prompt={tracks_title}
        progress={progress}
      ></ContentHeader>
      <section className="requirement-card-container">
        {requirements.map(req => (
          <div key={req.id} className="req-card-area">
            <RequirementCard requirement={req} />
          </div>
        ))}
      </section>
    </DashboardContent>
  )
}

export default RequirementsList
