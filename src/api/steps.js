import { requestWithAuth} from './config'

export const getSteps = async (authToken, taskId) => {
    const { data } = await requestWithAuth(authToken).get(`requirements/${taskId}/steps`)
    return data
}

export const toggleStepComplete = async (authToken, taskId, stepId) => {
    const { data } = await requestWithAuth(authToken).put(`requirements/${taskId}/steps/${stepId}`)
    return data
}