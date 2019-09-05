import React from "react"

import "../../styles/index.scss"

const ResourceCard = props => {
  console.log(props)
  return (
    <div className="resource-card">
      {props.resources.map(resource => (
        <div className="individual-resource" key={resource.id}>
          <p className="resource-url"><a href={resource.url}>{resource.title}</a></p>
          <p className="resource-type">{resource.type}</p>
        </div>
      ))}
    </div>
  )
}

export default ResourceCard
