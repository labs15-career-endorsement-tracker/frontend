import { createAsyncAction } from "redux-promise-middleware-actions"

import {
  addUser,
  getRequirements,
  getSteps,
  toggleStepComplete,
  getResources,
  getUserById,
  toggleStudent,
  getPinnedStudents
} from "../api"

export const createUser = createAsyncAction("CREATE_USER", addUser)

export const logout = () => ({ type: "LOGOUT", payload: null })

export const toggleMenu = isOpen => ({ type: "TOGGLE_MENU", payload: isOpen })

export const fetchRequirements = createAsyncAction(
  "FETCH_REQUIREMENTS",
  getRequirements
)

export const fetchResources = createAsyncAction("FETCH_RESOURCES", getResources)

export const fetchSteps = createAsyncAction("FETCH_STEPS", getSteps)

export const toggleStep = createAsyncAction("TOGGLE_STEP", toggleStepComplete)

export const fetchUser = createAsyncAction("FETCH_USER", getUserById)

export const togglePinnedStudent = createAsyncAction(
  "TOGGLE_STUDENT",
  toggleStudent
)

export const fetchPinnedStudents = createAsyncAction(
  "FETCH_PINNED_STUDENTS",
  getPinnedStudents
)
