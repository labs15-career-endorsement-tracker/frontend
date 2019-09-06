import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { fetchResources } from "../../actions"
import { loadAuthDataFromLocalStorage } from "./../../store"
import { withRouter } from "react-router"

// Components
import ResourceCard from "./ResourceCard"

// Styles
import "../../styles/index.scss"

const ResourceCardContainer = props => {
  console.log(props.match.params.id)
  const param = Number(props.match.params.id)
  const [resources, setResources] = useState([])
  const [resourceIsServerError, setResourceIsServerError] = useState(false)
  const [resourceServerError, setResourceServerError] = useState({
    message: "",
    name: "",
    statusCode: ""
  })

  useEffect(() => {
    const { token } = loadAuthDataFromLocalStorage()
    props.fetchResources(token, param)
  }, [])

  useEffect(() => {
    setResources(props.resources)
    setResourceIsServerError(props.resourceIsServerError)
    setResourceServerError(props.resourceServerError)
    console.log("resources", props.resources)
  }, [props.resources, props.resourceServerError, props.resourceIsServerError])

  return (
    <div className="temp-container">
      {resources.map(res => (
        <div className="resource-card-container">
          <div className="resource-header">
            <h1>Resources</h1>
          </div>
          <div className="resource-cards">
            <ResourceCard
              key={res.id}
              requirement={res.id}
              resources={res.resources}
            />
          </div>
        </div>
      ))}
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
)(withRouter(ResourceCardContainer))

// export default ResourceCardContainer
