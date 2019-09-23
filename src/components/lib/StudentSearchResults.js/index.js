import React from "react"
import StudentProgress from "./StudentProgress"

const StudentSearchResults = ({ foundStudent }) => {
  return (
    <div>
      <div>
        {foundStudent.first_name} {foundStudent.last_name}
        <div>
          <StudentProgress userId={foundStudent.id} />
        </div>
        <i className="far fa-plus"></i>
      </div>
    </div>
  )
}

export default StudentSearchResults
