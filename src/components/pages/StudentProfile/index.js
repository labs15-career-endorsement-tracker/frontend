import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { history, loadAuthDataFromLocalStorage } from "../../../store"
import { fetchUser, fetchRequirements } from "../../../actions"

const StudentProfile = () => {
  const user = useSelector(state => state.userReducer.user)
  const location = history.location.pathname
  const { ...values } = location.split("/")
  const studentId = Number(values[2])
  const [student, setStudent] = useState()

  useEffect(() => {
    const { token } = loadAuthDataFromLocalStorage()
    setStudent(fetchUser(token, studentId))
  }, [studentId])

  console.log(
    `This guy is from the useEffect, he is my student thing I made with a hook?:`,
    student
  )
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
