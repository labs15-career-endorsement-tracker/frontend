import { useEffect } from "react"
import { useCountUp } from "react-countup"

const useCountUpToProgress = progressValue => {
  const { countUp, update } = useCountUp({
    start: 0,
    end: progressValue,
    delay: 0,
    duration: 0.5
  })

  useEffect(() => {
    update(progressValue)
  }, [progressValue, update])

  return [countUp, update]
}

export default useCountUpToProgress
