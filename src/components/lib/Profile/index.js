import React from "react"
import { NavLink } from "react-router-dom"

const Profile = () => {
  return (
    <div className="container">
      <NavLink to="/myaccount" className="my-account-link">
        <i class="fas fa-user-edit"></i> My Account
      </NavLink>
    </div>
  )
}

export default Profile
