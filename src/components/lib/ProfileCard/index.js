import React from "react"
import { ProgressRing, RequirementCard } from "../../lib"

import "./index.scss"

const ProfileCard = ({ student, requirements }) => {
  console.log(student, requirements)

  return (
    <div className="big-container">
      <p>
        {student.first_name} {student.last_name}
      </p>
      <p>{student.email}</p>
      <div className="test">
        <div className="overall-progress">
          <p>Overall Progress:</p>
          <ProgressRing progressValue={student.progress}></ProgressRing>
        </div>
        <div className="req-container">
          {requirements.map(req => (
            <>
              <div className="progress-card">
                <p className="req-title">{req.title}</p>
                <ProgressRing progressValue={req.progress}></ProgressRing>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
