import React, { useState } from "react"
import { history } from "../../../store"

const StudentProfile = () => {
  const location = history.location.pathname
  const { ...values } = location.split("/")
  const studentId = Number(values[2])

  const [student, setStudent] = useState()

  console.log(studentId, student)
  return (
    <div>
      <h1>{studentId}</h1>
    </div>
  )
}

export default StudentProfile
