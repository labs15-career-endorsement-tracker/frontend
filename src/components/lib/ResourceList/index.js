import React from "react"
import { useSelector } from "react-redux"
import { withRouter } from "react-router"

import "./index.scss"

const selectResources = requirementId => state => {
  const requirements = state.requirementReducer.requirements
  if (!requirements) return null
  const requirement = requirements.find(
    requirement => requirement.id === requirementId
  )
  if (!requirement) return null
  if (!requirement.resources || requirement.resources.length <= 0) return null
  return requirement.resources
}

const ResourceList = ({ match }) => {
  const requirementId = Number(match.params.id)
  const resources = useSelector(selectResources(requirementId))

  if (!resources) return <></>

  return (
    <section className="resources">
      <h4>Resources</h4>
      <ul>
        {resources.map(resource => (
          <li key={resource.id}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default withRouter(ResourceList)
