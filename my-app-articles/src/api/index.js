//All functions to call Api
import { apiConfig, BASE_URL } from "../apiConfig"
import { PAGINATION } from "../constants"

//functions call list articles
export const getListArticles = async (offset) => {
    const result = await apiConfig.get(`${BASE_URL}/articles/?limit=${PAGINATION.LIMIT}&offset=${offset}`)
    console.log('result', result)
    return result?.data
} 

//post like article
export const favoriteApi = async(slg) => {
    const result = await apiConfig.post(`${BASE_URL}/articles/${slg}/favorite`)
    return result?.data
}
export const notFavoriteApi = async(slg) => {
    const result = await apiConfig.delete(`${BASE_URL}/articles/${slg}/favorite`)
    return result?.data
}