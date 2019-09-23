import { useState, useEffect } from "react"

const useGreeting = (initialValue = "Hello") => {
  const [greeting, setGreeting] = useState(initialValue)

  useEffect(() => {
    const currentHour = new Date().getHours()

    if (currentHour >= 3 && currentHour < 12) {
      return setGreeting("Good morning")
    }

    if (currentHour >= 12 && currentHour < 17) {
      return setGreeting("Good afternoon")
    }

    setGreeting("Good evening")
  }, [])

  return greeting
}

export default useGreeting
