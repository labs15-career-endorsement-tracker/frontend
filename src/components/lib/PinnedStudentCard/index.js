import React from "react"
import { Link } from "react-router-dom"

import "./index.scss"

const PinnedStudentCard = ({ student }) => {
  const {
    id,
    first_name: firstName,
    last_name: lastName,
    email,
    tracks_id: tracksId,
    progress
  } = student
  return (
    <div className="pinned-student">
      <Link to={`/student/${student.id}`}>{firstName}</Link>
    </div>
  )
}

export default PinnedStudentCard
