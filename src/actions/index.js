import { createAsyncAction } from "redux-promise-middleware-actions"

import { addUser, getRequirements, getSteps } from "../api"

export const createUser = createAsyncAction("CREATE_USER", addUser)

export const fetchRequirements = createAsyncAction(
  "FETCH_REQUIREMENTS",
  getRequirements
)


export const getStepsByTaskId = createAsyncAction("FETCH_STEPS", getSteps)

export {
  STEP_FETCH_IN_PROGRESS,
  STEP_FETCH_SUCCESS,
  STEP_FETCH_FAILURE,
  // getStepsByTaskId
} from "./stepAction"

export {
  TOGGLE_COMPLETE,
  toggleStepCompleteApi
} from "./stepAction"
