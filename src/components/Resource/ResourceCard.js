import React from "react"
import { loadAuthDataFromLocalStorage } from "./../../store"

import "../../styles/index.scss"

const ResourceCard = props => {
  console.log(props)
  return (
    <div className="resource-card">
      {props.resources.map(resource => (
        <div className="resource">
          <span>{resource.title}</span>
        </div>
      ))}
    </div>
  )
}

export default ResourceCard
