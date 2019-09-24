import React from "react"

import "./index.scss"

const PinnedStudentCard = ({student}) => {
    const {first_name : firstName, last_name: lastName, email, tracks_id: tracksId, progress} = student
    return (
        <div className="pinned-student">
            <p>{firstName}</p>
        </div>
    )
}

export default PinnedStudentCard