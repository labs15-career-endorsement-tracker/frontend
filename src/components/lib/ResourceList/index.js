import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"

import "./index.scss"

import { fetchResources } from "../../../actions"
import { loadAuthDataFromLocalStorage } from "../../../store"

import { ResourceCard } from "../../lib"

const ResourceCardContainer = ({ fetchResources, match, resourcesArray }) => {
  const param = Number(match.params.id)
  const [resources, setResources] = useState([])

  useEffect(() => {
    const { token } = loadAuthDataFromLocalStorage()
    fetchResources(token, param)
  }, [fetchResources, param])

  useEffect(() => {
    setResources(resourcesArray)
  }, [resourcesArray])

  return (
    <div className="temp-container">
      {resources.map(res => (
        <div className="resource-card-container" key={res.id}>
          <div className="resource-header">
            <h1>Resources</h1>
          </div>
          <div className="resource-cards">
            <ResourceCard requirement={res.id} resources={res.resources} />
          </div>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    resourceInProgress: state.resourceReducer.resourceInProgress,
    resourcesArray: state.resourceReducer.resources
  }
}

export default connect(
  mapStateToProps,
  { fetchResources }
)(withRouter(ResourceCardContainer))
