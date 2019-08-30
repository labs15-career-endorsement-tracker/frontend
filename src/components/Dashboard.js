import React from "react"
import UserInfo from "./UserInfo"
import RequirementCardContainer from "./requirement/RequirementCardContainer"

const Dashboard = () => {
  return (
    <div className="dash-container">
      <UserInfo />
      <RequirementCardContainer />
    </div>
  )
}

export default Dashboard
