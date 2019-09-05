import React from "react"

import "../../styles/index.scss"

const ResourceCard = props => {
  console.log(props)
  return (
    <div className="resource-card">
      {props.resources.map(resource => (
        <div className="resource" key={resource.id}>
          <span>{resource.title}</span>
        </div>
      ))}
    </div>
  )
}

export default ResourceCard
