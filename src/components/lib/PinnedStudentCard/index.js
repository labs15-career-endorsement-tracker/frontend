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

  const handleToggle = e => {
    e.preventDefault()
    dispatch(togglePinnedStudent(token, student.id))
  }

  return (
    <div className="pinned-student-card" key={uuid()}>
      <div className="inner-pinned-student-card">
        {student.first_name} {student.last_name}
        <p className="toggle-assign">
          <i onClick={handleToggle} className={`fad fa-thumbtack`}></i>
        </p>
        <ProgressRing progressValue={student.progress}></ProgressRing>
      </div>
    </div>
  )
}

export default PinnedStudentCard
