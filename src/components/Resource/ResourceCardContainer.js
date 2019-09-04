import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { loadAuthDataFromLocalStorage } from "./../../store"

import ResourceCard from "./ResourceCard"

import "../../styles/index.scss"

const ResourceCardContainer = props => {
  return (
    <div className="resource-card-container">
      <ResourceCard />
    </div>
  )
}

const mapStateToProps = state => {
  return {}
}

export default connect(
  mapStateToProps,
  {}
)(ResourceCardContainer)
