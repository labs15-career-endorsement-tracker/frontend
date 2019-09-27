import React from "react"
import { Link } from "react-router-dom"

import { ProgressRing } from "../../lib"
import uuid from "uuid/v4"
import { loadAuthDataFromLocalStorage } from "../../../store"
import { togglePinnedStudent } from "../../../actions"
import { useDispatch } from "react-redux"
import "./index.scss"

const PinnedStudentCard = ({ student }) => {
  const dispatch = useDispatch()
  const { token } = loadAuthDataFromLocalStorage()
  const handleToggle = e => {
    e.preventDefault()
    dispatch(togglePinnedStudent(token, student.id))
  }

  const trackName = track => {
    switch (track) {
      case 1:
        return <p className="student-track-name">Full Stack Web Development</p>
      case 2:
        return <p className="student-track-name">iOS</p>
      case 3:
        return <p className="student-track-name">Data Science</p>
      case 4:
        return <p className="student-track-name">Android</p>
      case 5:
        return <p className="student-track-name">UX Design</p>
      default:
        return null
    }
  }
  return (
    <div className="pinned-student-card" key={uuid()}>
      <div className="inner-pinned-student-card">
        <div className="inner-student-name">
          <Link to={`student/${student.id}`}>
            {trackName(student.tracks_id)}
            <p className="student-first-name">{student.first_name}</p>
            <p className="student-last-name">{student.last_name}</p>
          </Link>
        </div>
        <div className="pinned-student-info">
          <div className="inner-toggle-student" onClick={handleToggle}>
            <p className="toggle-assign">
              <i className={`fad fa-thumbtack`}></i>
              <span className="unassign">Unassign</span>
            </p>
          </div>
          <div className="inner-pinned-student-progress">
            <Link to={`student/${student.id}`}>
              <ProgressRing
                startColor="#081534"
                endColor="#081534"
                progressValue={student.progress}
                trailColor="#ffffff"
                strokeOpacity={0.2}
                strokeLinecap="butt"
              ></ProgressRing>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PinnedStudentCard
