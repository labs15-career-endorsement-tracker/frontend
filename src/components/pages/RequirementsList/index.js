import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import "./index.scss"

import { fetchRequirements, fetchUser } from "../../../actions"
import { loadAuthDataFromLocalStorage } from "../../../store"

import { RequirementCard } from "../../lib"

const RequirementsList = () => {
  const dispatch = useDispatch()
  const requirements = useSelector(
    state => state.requirementReducer.requirements
  )
  const { tracks_title } = useSelector(state => state.userReducer.user)

  useEffect(() => {
    const { userId, token } = loadAuthDataFromLocalStorage()
    dispatch(fetchRequirements(token))
    dispatch(fetchUser(token, userId))
  }, [dispatch])

  return (
    <section className="requirement-card-container">
      <hgroup>
        <h2>Requirements</h2>
        <h3>{tracks_title}</h3>
      </hgroup>
      {requirements.map(req => (
        <div key={req.id} className="req-card-area">
          <RequirementCard requirement={req} />
        </div>
      ))}
    </section>
  )
}

export default RequirementsList
