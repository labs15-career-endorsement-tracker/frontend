import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { fetchRequirements, fetchResources } from "../../actions"
import { loadAuthDataFromLocalStorage } from "./../../store"

// Components
import ResourceCard from "./ResourceCard"

// Styles
import "../../styles/index.scss"

const ResourceCardContainer = props => {
  const [resources, setResources] = useState([])
  const [requirements, setRequirements] = useState([])

  useEffect(() => {
    const { token } = loadAuthDataFromLocalStorage()
    props.fetchRequirements(token)
  })

  return (
    <div className="resource-card-container">
      <h1>Resources</h1>
      <ResourceCard />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    // inProgress: state.resourceReducer.inProgress
  }
}

export default connect(
  mapStateToProps,
  { fetchRequirements }
)(ResourceCardContainer)
