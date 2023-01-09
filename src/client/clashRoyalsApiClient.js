import axios from 'axios'
import { API_KEY_CLASH_ROYAL, BASE_URL_CLASH_ROYAL } from '../config'
//https://developer.clashroyale.com/#/documentation

const baseApiClient = axios.create({
  baseURL: BASE_URL_CLASH_ROYAL,
  headers: {
    Authorization: `Bearer ${API_KEY_CLASH_ROYAL}`,
  },
})

export const getCardsFetchAsync = async () => {
  try {
    const response = await fetch(`${BASE_URL_CLASH_ROYAL}/cards`, {
      headers: {
        Authorization: `Bearer ${API_KEY_CLASH_ROYAL}`,
      },
    })
    return response.json()
  } catch (error) {
    console.error(error)
  }
}
export const getCardsFetch = () => {
  return fetch(`${BASE_URL_CLASH_ROYAL}/cards`, {
    headers: {
      Authorization: `Bearer ${API_KEY_CLASH_ROYAL}`,
    },
  }).then((response) => response.json())
}

export const getCardsAxiosAsync = async () => {
  try {
    const response = await baseApiClient.get('/cards')
    return response.data
  } catch (error) {
    console.error(error)
  }
}
export const getCardAxios = () => {
  return baseApiClient.get('/cards').then((response) => response.data)
}
