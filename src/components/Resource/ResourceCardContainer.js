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
  const [resourceIsServerError, setResourceIsServerError] = useState(false)
  const [resourceServerError, setResourceServerError] = useState({
    message: "",
    name: "",
    statusCode: ""
  })

  useEffect(() => {
    const { token } = loadAuthDataFromLocalStorage()
    props.fetchResources(token)
  }, [])

  useEffect(() => {
    setResources(props.resources)
    setResourceIsServerError(props.resourceIsServerError)
    setResourceServerError(props.resourceServerError)
    console.log("resources", props.resources)
  }, [props.resources, props.resourceServerError, props.resourceIsServerError])

  return (
    <div className="resource-card-container">
      <h1>Resources</h1>
      <div className="resource-card">
        {resources.map(res => (
          <ResourceCard key={res.id} resources={res.resources} />
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
