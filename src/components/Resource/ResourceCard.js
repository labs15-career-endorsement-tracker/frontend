import React from "react"

import "../../styles/index.scss"

const ResourceCard = props => {
  console.log(props)
  return (
    <div className="resource-card">
      {props.resources.map(resource => (
        <div className="individual-resource" key={resource.id}>
          <p><a href={resource.url}>{resource.title}</a></p>
          <p>{resource.type}</p>
        </div>
      ))}
    </div>
  )
}

export default ResourceCard
