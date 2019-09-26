import React from "react"
import { ProgressRing } from "../../lib"
import uuid from "uuid/v4"
import { useDispatch } from "react-redux"
import { loadAuthDataFromLocalStorage } from "../../../store"

import { togglePinnedStudent } from "../../../actions"

import "./index.scss"

const ProfileCard = ({ student, requirements, showFull }) => {
  const dispatch = useDispatch()

  const { token } = loadAuthDataFromLocalStorage()

  const handleToggle = e => {
    e.preventDefault()
    dispatch(togglePinnedStudent(token, student.id))
  }
  return (
    <div className="big-container">
      <div className="profile-info">
        <p className="profile-first">
          {student.first_name} {student.last_name}
        </p>
      </div>

      <div className="temp-container">
        {showFull === "false" ? (
          <div className="overall-progress" key={uuid()}>
            <p className="toggle-assign">
              <i onClick={handleToggle} className={`fad fa-thumbtack`}></i>
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
