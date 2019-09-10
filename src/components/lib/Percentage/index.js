import React from "react"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import { easeQuadInOut } from "d3-ease"
import ProgressProvider from "./ProgressProvider"
import GradientSVG from "../Gradient"

import "react-circular-progressbar/dist/styles.css"
import "./index.scss"

const Percentage = ({ progress = 0 }) => {
  return (
    <div className="percentage">
      <GradientSVG
        startColor="#57EC75"
        endColor="#20CD8A"
        idCSS={"progress-gradient"}
        rotation={90}
      />
      <ProgressProvider
        valueStart={0}
        valueEnd={progress}
        duration={1}
        easingFunction={easeQuadInOut}
      >
        {value => {
          // you have to round the value again here because of the way the animation increments it
          const roundedValue = Math.round(value)

          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
              strokeWidth={12}
              styles={buildStyles({
                // Text size
                textSize: "3.1rem",
                // need this line in order to let d3-ease handle the transition animation
                pathTransition: "none",
                // pathTransitionDuration: 0.5,
                // Colors
                // pathColor: "#57EC75",
                textColor: "#104753",
                trailColor: "#c7ebd7"
              })}
            />
          )
        }}
      </ProgressProvider>
      {/* <p className="progress_text">Overall Progress</p> */}
    </div>
  )
}
export default Percentage
