import React, { useEffect, useState } from "react"
import { CircularProgressbarWithChildren } from "react-circular-progressbar"
import uuid from "uuid/v4"

import "./index.scss"

import ProgressPercentage from "./ProgressPercentage"
import { useCountUpToProgress, useSvgGradient } from "../../../hooks"

const ProgressRing = ({
  progressValue = 0,
  startColor = "#57EC75",
  endColor = "#20CD8A",
  trailColor = "#efffff",
  strokeOpacity = 0.2,
  strokeLinecap = "round"
}) => {
  const [progressId] = useState(() =>
    uuid()
      .replace(/-/g, "")
      .replace(/\d/g, "")
  )
  const [progress, setProgress] = useCountUpToProgress(progressValue)
  const gradientId = useSvgGradient(progressId, startColor, endColor)

  useEffect(() => {
    setProgress(progressValue)
  }, [progressValue, setProgress])

  return (
    <div className="progress-ring">
      <CircularProgressbarWithChildren
        value={progress}
        strokeWidth={12}
        classes={{ root: progressId }}
        styles={{
          path: { stroke: `url(#${gradientId})`, strokeLinecap: strokeLinecap },
          trail: { stroke: trailColor, strokeOpacity: strokeOpacity }
        }}
      >
        <ProgressPercentage progressValue={progress}></ProgressPercentage>
      </CircularProgressbarWithChildren>
    </div>
  )
}

export default ProgressRing
