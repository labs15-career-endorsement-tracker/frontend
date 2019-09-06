import React from "react"

<<<<<<< HEAD
const ResourceCard = () => {
  return (
    <div>
      <h1>Hiya</h1>
=======
import "../../styles/index.scss"

const ResourceCard = props => {
  console.log("props from resource card", props.resources)
  const renderIcon = type => {
    switch (type) {
      case "google_doc":
        return <i className="fab fa-google-drive fa-2x"></i>
      case "youtube_vid":
        return <i className="fab fa-youtube fa-2x"></i>
      default:
        return <i className="far fa-link fa-2x"></i>
    }
  }

  return (
    <div className="resource-card">
      {props.resources.map(resource => (
        <div className="individual-resource" key={resource.id}>
          <div className="individual-resource-icon">
            {renderIcon(resource.type)}
          </div>

          <div className="individual-resource-content">
            <p className="resource-url">
              <a href={resource.url} target="_blank">
                {resource.title}
              </a>
            </p>
          </div>
        </div>
      ))}
>>>>>>> 806bde80642762862c4c77bedd82eff7423bfb54
    </div>
  )
}

export default ResourceCard
