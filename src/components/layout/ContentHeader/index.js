import React from "react"

import { ProgressRing, Logo } from "../../lib"

import {useMenu} from "../../../hooks"

import {MenuBurger} from "../../lib"
import "./index.scss"

<<<<<<< HEAD

const DashboardHeader = ({ title, prompt, progress }) => {
  const {isOpen} = useMenu()
=======
const DashboardHeader = ({ title, prompt, progress = 0 }) => {
>>>>>>> 3eb9357a95718802c969b5ac7e4f2b09586b7bfd
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
