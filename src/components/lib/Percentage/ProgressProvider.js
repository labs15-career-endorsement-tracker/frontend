import React, { useEffect, useState } from "react"
import { Animate } from "react-move"

const ProgressProvider = ({
  valueStart = 0,
  repeat,
  duration,
  valueEnd,
  children,
  easingFunction
}) => {
  let interval
  const [isAnimated, setIsAnimated] = useState(false)
  useEffect(() => {
    if (repeat) {
      interval = window.setInterval(() => {
        setIsAnimated(!isAnimated)
      }, duration * 1000)
    } else {
      setIsAnimated(!isAnimated)
    }
    return () => window.clearInterval(interval)
  }, [])

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
