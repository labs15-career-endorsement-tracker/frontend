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
      <section className="requirements-list">
        {requirements.map(req => (
          <RequirementCard key={req.id} requirement={req} />
        ))}
      </section>
    </DashboardContent>
  )
}

export default RequirementsList
