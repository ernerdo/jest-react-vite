import axios from 'axios'
import { BASE_URL_DOTA2 } from '../config'
//docs https://docs.opendota.com/#tag/heroes
const baseApiClient = axios.create({
  baseURL: BASE_URL_DOTA2,
  withCredentials: false,
})

export const getHeroesAxiosAsync = async () => {
  try {
    const response = await baseApiClient.get('/heroes')
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const getHeroesFetchAsync = async () => {
  try {
    const response = await fetch(`${BASE_URL_DOTA2}/heroes`)
    return response.json()
  } catch (error) {
    console.error(error)
  }
}
export const getHeroesFetch = () => {
  return fetch(`${BASE_URL_DOTA2}/heroes`).then((response) => response.json())
}
export const getHeroesAxios = () => {
  return baseApiClient.get('/heroes').then((response) => response.data)
}
