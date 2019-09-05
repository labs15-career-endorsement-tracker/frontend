import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { fetchResources } from "../../actions"
import { loadAuthDataFromLocalStorage } from "./../../store"

// Components
import ResourceCard from "./ResourceCard"

// Styles
import "../../styles/index.scss"

const ResourceCardContainer = props => {
  const [resources, setResources] = useState([])
  const [requirements, setRequirements] = useState([])
  const [resourceIsServerError, setResourceIsServerError] = useState(false)
  const [resourceServerError, setResourceServerError] = useState({
    message: "",
    name: "",
    statusCode: ""
  })

  useEffect(() => {
    const { token } = loadAuthDataFromLocalStorage()
    props.fetchResources(token)
  })

  useEffect(() => {
    setRequirements(props.requirements)
    setResources(props.resources)
    setResourceIsServerError(props.isServerError)
    setResourceServerError(props.serverError)
  }, [
    props.requirements,
    props.setResourceIsServerError,
    props.setResourceServerError,
    props.resources
  ])

  return (
    <div className="resource-card-container">
      <h1>Resources</h1>
      <div className="resource-card">
        {resources.map(req => (
          <ResourceCard
            key={req.id}
            requirement={req.id}
            resources={req.resources}
          />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    resourceInProgress: state.resourceReducer.resourceInProgress,
    resources: state.resourceReducer.resources,
    resourceServerError: state.resourceReducer.resourceServerError,
    resourceIsServerError: state.resourceReducer.resourceIsServerError
  }
}

export default connect(
  mapStateToProps,
  { fetchResources }
)(ResourceCardContainer)
