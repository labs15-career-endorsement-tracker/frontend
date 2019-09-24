import React from "react"

const ProfileCard = ({ student }) => {
  return (
    <div>
      <p>
        {student.first_name} {student.last_name}
      </p>
    </div>
  )
}

export default ProfileCard
