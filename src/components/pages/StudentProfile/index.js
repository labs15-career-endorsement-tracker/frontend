import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { getUserById } from "../../../api"

import { history, loadAuthDataFromLocalStorage } from "../../../store"

const StudentProfile = () => {
  const user = useSelector(state => state.userReducer.user)
  const location = history.location.pathname
  const { ...values } = location.split("/")
  const studentId = Number(values[2])
  const [student, setStudent] = useState()

  useEffect(() => {
    const { token } = loadAuthDataFromLocalStorage()
    getUserById(token, studentId).then(student => {
      setStudent(student)
    })
  }, [studentId])

  return (
    <div>
      <h1>
        <span>This guy right here is the ID of the student from the URL: </span>
        {studentId}
      </h1>
      <span>This guy is the user from state: </span>
      {user.first_name}
    </div>
  )
}

export default StudentProfile
