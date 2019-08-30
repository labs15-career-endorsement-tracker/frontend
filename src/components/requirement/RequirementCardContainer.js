import React, { useState, useEffect } from "react"

import ReqCard from './ReqCard'

import { getRequirements } from '../../actions'
import { connect } from 'react-redux'

const RequirementCardContainer = (props) => {

  const [requirements, setRequirements] = useState([])
  const [isServerError, setIsServerError] = useState(false)
  const [serverError, setServerError] = useState({
    message: "",
    name: "",
    statusCode: ""
  })
  
  useEffect(()=> {
    props.getRequirements()
  }, [])

  useEffect(() => {
    setRequirements(props.requirements)
    setIsServerError(props.isServerError)
    setServerError(props.serverError)
  }, [props.requirements, props.isServerError, props.serverError])

  return (
    <div className="requirement-card-container">
        <h1>Requirements</h1>
        {requirements.map(reg => 
          <ReqCard key={reg.id} requirement={reg} />
        )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    inProgress: state.requirementReducer.inProgress,
    requirements: state.requirementReducer.requirements,
    serverError: state.requirementReducer.serverError,
    isServerError: state.requirementReducer.isServerError
  }
}

export default connect(
  mapStateToProps, 
  { getRequirements }
)(RequirementCardContainer)
