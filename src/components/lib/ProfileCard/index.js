import React from "react"
import { ProgressRing } from "../../lib"
import uuid from "uuid/v4"

import "./index.scss"

const ProfileCard = ({ student, requirements, showFull }) => {
  return (
    <div className="big-container">
      <div className="profile-info">
        <p className="profile-track">Full-Stack Web Development</p>
        <p className="profile-first">{student.first_name}</p>
        <p className="profile-last">{student.last_name}</p>
      </div>

      <div className="temp-container">
        {showFull === "false" ? (
          <div className="overall-progress" key={uuid()}>
            <p className="toggle-assign">
              <i class="fas fa-user-minus"></i>Unassign
            </p>
            <ProgressRing progressValue={student.progress}></ProgressRing>
          </div>
        ) : (
          <div className="req-container" key={`$student.id`}>
            <div className="progress-card">
              <p>Overall Progress</p>
              <ProgressRing progressValue={student.progress}></ProgressRing>
            </div>
            {requirements.map(req => (
              <div className="progress-card" key={uuid()}>
                <div className="req-title">
                  <p>{req.title}</p>
                </div>
                <div className="progress-ring">
                  <ProgressRing progressValue={req.progress}></ProgressRing>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProfileCard
