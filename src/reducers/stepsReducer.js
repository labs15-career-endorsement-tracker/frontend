import { STEP_FETCH_IN_PROGRESS, STEP_FETCH_SUCCESS, STEP_FETCH_FAILURE} from '../actions'

const initialState = {
    inProgress: false,
    serverError: {},
    isServerError: false,
    stepsByTask: []
}

export const stepReducer = (state = initialState, action) => {
    switch (action.type) {
        case STEP_FETCH_IN_PROGRESS:
            return {
                ...state,
                inProgress: true
            }
        case STEP_FETCH_SUCCESS:
            return {
                ...state,
                inProgress: false,
                stepsByTask: action.payload
            }
        case STEP_FETCH_FAILURE:
            return {
                ...state,
                inProgress: false,
                isServerError: true,
                serverError: action.payload
            }
            default:
                return state
    }
}