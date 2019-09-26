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
            {student.first_name} {student.last_name}
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
                strokeOpacity={1}
                trailColor="#fff"
                progressValue={student.progress}
              ></ProgressRing>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PinnedStudentCard
