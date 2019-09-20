import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { loadAuthDataFromLocalStorage } from "../../../store"

import { fetchUser, fetchRequirements } from "../../../actions"

const MyAccount = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.userReducer.user)

  useEffect(() => {
    const { userId, token } = loadAuthDataFromLocalStorage()
    dispatch(fetchRequirements(token))
    dispatch(fetchUser(token, userId))
  }, [dispatch])

  console.log(`user`, user)

  return (
    <div className="myaccount-container">
      <h1>My Account</h1>
      <p>Update your account settings</p>
      <hr />
      <p>
        <span>First name</span> {user.first_name}
      </p>
      <p>
        <span>Last name</span> {user.last_name}
      </p>
      <p>
        <span>Track</span> {user.tracks_title}
      </p>
    </div>
  )
}

export default MyAccount
