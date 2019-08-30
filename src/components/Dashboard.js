import React from "react"
import UserInfo from "./UserInfo"
import RequirementCardContainer from "./requirement/RequirementCardContainer"
import StepList from "./steps/StepList"

const Dashboard = () => {
  return (
    <div className="dash-container">
      <UserInfo />
      <RequirementCardContainer />
      <StepList />
    </div>
  )
}

export default Dashboard
