import React from "react"
import { DashboardContent, ContentHeader } from "../../layout"
import { ProgressRing } from "../../lib"
import uuid from "uuid/v4"

import "./index.scss"

const ProfileCard = ({ student, requirements }) => {
  return (
    <DashboardContent>
      <ContentHeader
        title={`${student.first_name} ${student.last_name}`}
        prompt={"Individual Requirements Breakdown"}
        progress={-1}
      ></ContentHeader>
      <div className="individual-cards">
        {requirements.map(req => (
          <div className="progress-card" key={uuid()}>
            <div className="req-title">
              <p>{req.title}</p>
            </div>
            <div className="progress-ring">
              <ProgressRing
                startColor="#081534"
                endColor="#081534"
                progressValue={req.progress}
                trailColor="#ffffff"
                strokeOpacity={0.2}
                strokeLinecap="butt"
              ></ProgressRing>
            </div>
          </div>
        ))}
      </div>
    </DashboardContent>
  )
}

export default ProfileCard
