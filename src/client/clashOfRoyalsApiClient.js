import axios from 'axios'
import { API_KEY_CLASH_ROYAL, BASE_URL_CLASH_ROYAL } from '../config'
//https://developer.clashroyale.com/#/documentation

const baseApiClient = axios.create({
  baseURL: BASE_URL_CLASH_ROYAL,
  withCredentials: false,
})

export const getFetchCardsAsync = async () => {
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
export const getFetchCards = () => {
  return fetch(`${BASE_URL_CLASH_ROYAL}/cards`, {
    headers: {
      Authorization: `Bearer ${API_KEY_CLASH_ROYAL}`,
    },
  }).then((response) => response.json())
}
