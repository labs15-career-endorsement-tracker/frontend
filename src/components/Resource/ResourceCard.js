import React from "react"

import "../../styles/index.scss"

const ResourceCard = props => {
  console.log(props)
  return (
    <div className="resource-card">
      {props.resources.map(resource => (
        <div className="resource" key={resource.id}>
          <a href={resource.url}>{resource.title}</a>
        </div>
      ))}
    </div>
  )
}

export default ResourceCard
