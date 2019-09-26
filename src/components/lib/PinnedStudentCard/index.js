import React from "react"
import { Link } from "react-router-dom"
import { ContentHeader, DashboardContent } from "../../layout"

import { ProgressRing } from "../../lib"
import uuid from "uuid/v4"
import { loadAuthDataFromLocalStorage } from "../../../store"
import { togglePinnedStudent } from "../../../actions"
import { useDispatch } from "react-redux"
import "./index.scss"

const PinnedStudentCard = ({ student }) => {
  const dispatch = useDispatch()
  const { token } = loadAuthDataFromLocalStorage()
  console.log(student)
  const handleToggle = e => {
    e.preventDefault()
    dispatch(togglePinnedStudent(token, student.id))
  }

  return (
    <div className="pinned-student-card" key={uuid()}>
      <div className="inner-pinned-student-card">
        <div className="inner-student-name">
          <Link to={`student/${student.id}`}>
            <p className="student-first-name">{student.first_name}</p>{" "}
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
