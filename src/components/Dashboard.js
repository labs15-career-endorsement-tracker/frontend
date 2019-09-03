import React from "react"
import UserInfo from "./UserInfo"
import RequirementCardContainer from "./requirement/RequirementCardContainer"
import Navigation from "./Navigation"

const Dashboard = () => {
  return (
    <div className="dash-container">
      <Navigation />
      <UserInfo />
      <RequirementCardContainer />
    </div>
  )
}

export default Dashboard
