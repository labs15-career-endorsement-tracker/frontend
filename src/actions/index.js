import { createAsyncAction } from "redux-promise-middleware-actions"

import {
  addUser,
  getRequirements,
  getSteps,
  toggleStepComplete,
  getResourcesByReqId
} from "../api"

export const createUser = createAsyncAction("CREATE_USER", addUser)

export const fetchRequirements = createAsyncAction(
  "FETCH_REQUIREMENTS",
  getRequirements
)

export const fetchSteps = createAsyncAction("FETCH_STEPS", getSteps)

export const fetchResources = createAsyncAction(
  "FETCH_RESOURCES",
  getResourcesByReqId
)

export const toggleStep = createAsyncAction("TOGGLE_STEP", toggleStepComplete)
