import React from "react"

import "../../styles/index.scss"

const ResourceCard = props => {
  console.log(props)
  return (
    <div className="resource-card">
      {props.resources.map(resource => (
        <div className="individual-resource" key={resource.id}>
          <div className="individual-resource-icon">
            <i class="fab fa-google-drive fa-2x"></i>
          </div>
          <div className="individual-resource-content">
            <p className="resource-url">
              <a href={resource.url}>{resource.title}</a>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ResourceCard
