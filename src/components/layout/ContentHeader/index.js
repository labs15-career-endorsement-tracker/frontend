import React from "react"

import { ProgressRing, Logo } from "../../lib"

import "./index.scss"

const DashboardHeader = ({ title, prompt, progress = 0 }) => {

  return (
    <header className="header">
      <Logo></Logo>
      <hgroup>
        <h1>{title}</h1>
        <h2>{prompt}</h2>
      </hgroup>
      {progress >= 0 && <ProgressRing progressValue={progress}></ProgressRing>}
    </header>
  )
}

export default DashboardHeader
