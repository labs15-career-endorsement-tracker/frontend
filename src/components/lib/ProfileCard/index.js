import React from "react"
import { ProgressRing } from "../../lib"
import uuid from "uuid/v4"

import "./index.scss"

const ProfileCard = ({ student, requirements, showFull }) => {
  console.log(`***********`, student, requirements)

  console.log(showFull)
  return (
    <div className="big-container">
      <p>Full-Stack Web Development</p>
      <p>
        {student.first_name} {student.last_name}
      </p>
      <p>{student.email}</p>
      <div className="test">
        {showFull === "false" ? (
          <div className="overall-progress" key={uuid()}>
            <p>Overall Progress:</p>
            <ProgressRing progressValue={student.progress}></ProgressRing>
          </div>
        ) : (
          <div className="req-container" key={`$student.id`}>
            <div className="overall-progress">
              <p>Overall Progress:</p>
              <ProgressRing progressValue={student.progress}></ProgressRing>
            </div>
            {requirements.map(req => (
              <div className="progress-card" key={uuid()}>
                <p className="req-title">{req.title}</p>
                <ProgressRing progressValue={req.progress}></ProgressRing>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProfileCard
