import React from "react"
import { NavLink } from "react-router-dom"
import "./index.scss"

const Profile = () => {
  return (
    <div className="profile-container">
      <NavLink to="/myaccount" className="my-account-link">
        <i className="fas fa-user-edit"></i>
        <span className="account-text">My Account</span>
      </NavLink>
    </div>
  )
}

export default Profile
