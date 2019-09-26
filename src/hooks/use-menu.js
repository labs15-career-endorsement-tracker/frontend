import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { toggleMenu } from "../actions"

const useMenu = () => {
  const dispatch = useDispatch()
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