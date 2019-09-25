import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { getUserById, getRequirementsByUserId } from "../../../api"

import { history, loadAuthDataFromLocalStorage } from "../../../store"

import "./index.scss"

import ProfileCard from "../../lib/ProfileCard"
import { fetchRequirements } from "../../../actions"

const StudentProfile = () => {
  const dispatch = useDispatch()

  const [...values] = history.location.pathname.split("/")
  const studentId = Number(values[2])

  const [student, setStudent] = useState()
  const [requirements, setRequirements] = useState()

  useEffect(() => {
    const { token } = loadAuthDataFromLocalStorage()
    getUserById(token, studentId).then(student => {
      setStudent(student)
    })
    getRequirementsByUserId(token, studentId).then(student => {
      setRequirements(student)
    })
    dispatch(fetchRequirements(token))
  }, [studentId, dispatch])

  return (
    <div className="student-profile-container">
      {!student || !requirements ? (
        <h1>Loading</h1>
      ) : (
        <ProfileCard
          student={student}
          requirements={requirements}
          showFull="true"
        ></ProfileCard>
      )}
    </div>
  )
}

export default StudentProfile
