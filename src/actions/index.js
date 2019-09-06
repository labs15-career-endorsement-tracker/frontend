import { createAsyncAction } from "redux-promise-middleware-actions"

import {
  addUser,
  getRequirements,
  getSteps,
  toggleStepComplete,
  getResources
} from "../api"

export const createUser = createAsyncAction("CREATE_USER", addUser)

export const fetchRequirements = createAsyncAction(
  "FETCH_REQUIREMENTS",
  getRequirements
)

export const fetchResources = createAsyncAction("FETCH_RESOURCES", getResources)

export const fetchSteps = createAsyncAction("FETCH_STEPS", getSteps)

export const toggleStep = createAsyncAction("TOGGLE_STEP", toggleStepComplete)
