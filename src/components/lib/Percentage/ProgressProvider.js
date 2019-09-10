import React, {useState, useEffect} from "react"
import { Animate } from "react-move"

const ProgressProvider = ({
  valueStart = 0,
  duration,
  valueEnd,
  children,
  easingFunction
}) => {
  const [isAnimated, setIsAnimated] = useState(false)
  useEffect(() => {
    setIsAnimated(true)
  }, [valueEnd])
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
