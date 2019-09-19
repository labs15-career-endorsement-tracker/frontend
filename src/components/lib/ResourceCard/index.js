import React from "react"

import "./index.scss"

const ResourceCard = props => {
  const renderIcon = type => {
    switch (type) {
      case "google_doc":
        return <i className="fab fa-google-drive"></i>
      case "youtube_vid":
        return <i className="fab fa-youtube"></i>
      default:
        return <i className="far fa-link"></i>
    }
  }

  return (
    <div className="resource-card">
      {props.resources.map(resource => (
        <div className="individual-resource" key={resource.id}>
          <div className="individual-resource-icon">
            {renderIcon(resource.type)}
          </div>
          <div className="individual-resource">
            <p>
              <a
                href={resource.url}
                className="resource-url"
                target="_blank"
                rel="noopener noreferrer"
              >
                {resource.title}
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ResourceCard
