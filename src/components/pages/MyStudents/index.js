import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchPinnedStudents } from "../../../actions"
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
      <div className="search-pinned-students-wrapper">
        <FindStudent />
        <div className="pinned-students-container">
          <div className="pinned-students-greeting">
            <h1>Pinned students</h1>
          </div>
          {pinnedStudents.map(student => (
            <PinnedStudentCard key={student.id} student={student}></PinnedStudentCard>
          ))}
        </div>
      </div>
    </DashboardContent>
  )
}

export default MyStudents
