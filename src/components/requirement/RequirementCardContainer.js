import React, { useEffect } from "react"
import { getRequirements } from '../../actions'
import { connect } from 'react-redux'

const RequirementCardContainer = (props) => {

  useEffect(() => {
    props.getRequirements()
  })

  return (
    <div className="requirement-card-container">
        <h1>Requirements</h1>
    </div>
  )
}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, { getRequirements })(RequirementCardContainer)
