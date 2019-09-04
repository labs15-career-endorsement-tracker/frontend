import React from "react"
import UserInfo from "./UserInfo"
import RequirementCardContainer from "./requirement/RequirementCardContainer"
import StepList from "./steps/StepList"
import Navigation from "./Navigation"
import ResourceCardContainer from "./Resource/ResourceCardContainer"

const Dashboard = () => {
  return (
    <div className="dash-container">
      <Navigation />
      <UserInfo />
      <RequirementCardContainer />
      <StepList />
      <ResourceCardContainer />
    </div>
  )
}

export default Dashboard
