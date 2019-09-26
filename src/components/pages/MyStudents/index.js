import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchPinnedStudents } from "../../../actions"
import { Link } from "react-router-dom"
import PinnedStudentCard from "../../lib/PinnedStudentCard"
import FindStudent from "../../pages/FindStudent"

import { ContentHeader, DashboardContent } from "../../layout"

import {} from "../../lib"

import "./index.scss"

const MyStudents = () => {
  const pinnedStudents = useSelector(
    state => state.studentReducer.pinnedStudents
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPinnedStudents())
  }, [dispatch])
  return (
    <DashboardContent>
      <ContentHeader
        title={"Find a Student"}
        prompt={"Search for a student by name"}
        progress={-1}
      ></ContentHeader>
      <FindStudent />
      {pinnedStudents.map(student => (
        <div className="student-profile-card" key={student.id}>
          <Link to={`/student/${student.id}`}>
            <PinnedStudentCard student={student}></PinnedStudentCard>
          </Link>
        </div>
      ))}
    </DashboardContent>
  )
}

export default MyStudents
