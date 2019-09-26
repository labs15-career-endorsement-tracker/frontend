import { useState, useEffect } from "react"
import { useSelector } from "react-redux"


const useMenu = () => {
  const isOpen = useSelector(state => state.menuReducer.isOpen)
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    function handleResize() {
        setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])
  return {width, isOpen}
}

export default useMenu