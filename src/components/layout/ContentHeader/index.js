import React from "react"

import { ProgressRing, Logo } from "../../lib"

import "./index.scss"

const DashboardHeader = ({ title, prompt, progress }) => {
  return (
    <header className="header">
      <Logo></Logo>
      <hgroup>
        <h1>{title}</h1>
        <h2>{prompt}</h2>
      </hgroup>
      {progress && <ProgressRing progressValue={progress}></ProgressRing>}
    </header>
  )
}

export default DashboardHeader
