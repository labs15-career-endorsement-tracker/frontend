import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { logout } from "../actions"
import {
  loadAuthDataFromLocalStorage,
  clearAuthDataFromLocalStorage,
  history
} from "../store"

const useMenu = () => {
  const dispatch = useDispatch()
  const isOpen = useSelector(state => state.menuReducer.isOpen)
  return isOpen
}

export default useMenu