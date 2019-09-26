import React from "react"

import { ProgressRing, Logo } from "../../lib"

import {useSelector} from "react-redux"

import {MenuBurger} from "../../lib"
import "./index.scss"


const DashboardHeader = ({ title, prompt, progress }) => {
  const isOpen = useSelector(state => state.menuReducer.isOpen)
  return (
    <header className="header">
      <MenuBurger isOpen={isOpen} />
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
