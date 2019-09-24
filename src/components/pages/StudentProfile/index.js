import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { getUserById } from "../../../api"

import { history, loadAuthDataFromLocalStorage } from "../../../store"

import ProfileCard from "../../lib/ProfileCard"

const StudentProfile = () => {
  const user = useSelector(state => state.userReducer.user)
  const [...values] = history.location.pathname.split("/")
  const studentId = Number(values[2])
  const [student, setStudent] = useState()

  useEffect(() => {
    const { token } = loadAuthDataFromLocalStorage()
    getUserById(token, studentId).then(student => {
      setStudent(student)
    })
  }, [studentId])

  console.log(student)
  return (
    <div>
      <h1>
        <ProfileCard student={student}></ProfileCard>
      </h1>
    </div>
  )
}

export default StudentProfile
