import React from "react"
import { Animate } from "react-move"
import Gradient from "../Gradient"

const ProgressProvider = ({
  valueStart = 0,
  duration,
  valueEnd,
  children,
  easingFunction
}) => {
  let isAnimated = true
  return (
    <Animate
      start={() => ({
        value: valueStart
      })}
      update={() => ({
        value: [isAnimated ? valueEnd : valueStart],
        timing: {
          duration: duration * 1000,
          ease: easingFunction
        }
      })}
    >
      {({ value }) => children(value)}
    </Animate>
  )
}

export default ProgressProvider
