import React from "react"
import { history } from "../../../store"

const StudentProfile = () => {
  const location = history.location.pathname
  const { ...values } = location.split("/")
  const student = Number(values[2])
  console.log(student)
  return (
    <div>
      <h1>{student}</h1>
    </div>
  )
}

export default StudentProfile
