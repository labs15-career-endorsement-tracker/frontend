import React from "react"
import { Link } from "react-router-dom"

import "./index.scss"

const PinnedStudentCard = ({ student }) => {
  const { first_name: firstName } = student
  return (
    <div className="pinned-student">
      <Link to={`/student/${student.id}`}>{firstName}</Link>
    </div>
  )
}

export default PinnedStudentCard
