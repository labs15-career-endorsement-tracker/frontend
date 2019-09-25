import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { logout } from "../actions"
import {
  loadAuthDataFromLocalStorage,
  clearAuthDataFromLocalStorage,
  history
} from "../store"

const useLogout = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.userReducer.user)
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  useEffect(() => {
    if (loadAuthDataFromLocalStorage().token === null)
      return setIsLoggedIn(false)
    if (!user) setIsLoggedIn(false)
    setIsLoggedIn(true)
  }, [setIsLoggedIn, user])

  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(logout())
      clearAuthDataFromLocalStorage()
      setTimeout(() => history.push("/auth/sign-in"), 100)
    }
  }, [isLoggedIn, dispatch])
}

export default useLogout
