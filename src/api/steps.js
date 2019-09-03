import { requestWithAuth} from './config'

export const getSteps = async (authToken, taskId) => {
    const { data } = await requestWithAuth(authToken).get(`requirements/${taskId}/steps`)
    return data
}

export const toggleStepComplete = async (authToken, taskId, stepId, isComplete) => {

    const { data } = await requestWithAuth(authToken).put(`requirements/${taskId}/steps/${stepId}`, {"is_complete": isComplete})

    return data
    
}