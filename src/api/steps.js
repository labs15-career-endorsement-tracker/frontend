import { requestWithAuth} from './config'

export const getSteps = async (authToken, taskId) => {
    const { data } = await requestWithAuth(authToken).get(`requirements/${taskId}/steps`)
    return data
}