import React from "react"
import { Link } from "react-router-dom"

import "./index.scss"

import { useCountUpToProgress } from "../../../hooks"

const RequirementCard = ({ requirement }) => {
  const [progress] = useCountUpToProgress(requirement.progress)

  return (
    <Link
      className={`requirement ${requirement.progress >= 100 && "is-complete"}`}
      to={`/requirements/${requirement.id}`}
    >
      <span className="requirement-title">{requirement.title}</span>

      {requirement.progress >= 100 && <i className="fas fa-check-circle"></i>}
      {requirement.progress < 100 && (
        <div className="progress-bar">
          <div className="track"></div>
          <div className="path" style={{ width: `${progress}%` }}></div>
        </div>
      )}
    </Link>
  )
}

export default RequirementCard
