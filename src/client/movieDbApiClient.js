import axios from 'axios'
import { API_KEY_MOVIE_DB, BASE_URL_MOVIE_DB } from '../config'
//docs https://developers.themoviedb.org/3/getting-started/introduction
const baseApiClient = axios.create({
  baseURL: BASE_URL_MOVIE_DB,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  params: {
    api_key: API_KEY_MOVIE_DB,
  },
})

export const getTrendingAxiosAsync = async () => {
  try {
    const response = await baseApiClient.get(`/trending/all/day`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const getTrendingFetchAsync = async () => {
  try {
    const response = await fetch(
      `${BASE_URL_MOVIE_DB}/trending/all/day?api_key=${API_KEY_MOVIE_DB}`
    )
    return response.json()
  } catch (error) {
    console.error(error)
  }
}

export const getTrendingFetch = () => {
  return fetch(
    `${BASE_URL_MOVIE_DB}/trending/all/day?api_key=${API_KEY_MOVIE_DB}`
  ).then((response) => response.json())
}
export const getTrendingAxios = () => {
  return baseApiClient
    .get(`/trending/all/day`)
    .then((response) => response.data)
}

export const getGenreMovieListAxiosAsync = async () => {
  try {
    const response = await baseApiClient.get('/genre/movie/list')
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const getMoviesByGenreAxios = async (genreId) => {
  try {
    const response = await baseApiClient.get('discover/movie', {
      params: {
        with_genres: genreId,
      },
    })
    return response.data
  } catch (error) {
    console.error(error)
  }
}
export const getMoviesBySearchAxios = async (searchTerm) => {
  try {
    const response = await baseApiClient.get('/search/movie', {
      params: {
        query: searchTerm,
      },
    })
    return response.data
  } catch (error) {
    console.error(error)
  }
}
export const getMovieDetailsAxios = async (movieId) => {
  try {
    const response = await baseApiClient.get(`/movie/${movieId}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const getMoviesRecommendationsAxios = async (movieId) => {
  try {
    const response = await baseApiClient.get(
      `/movie/${movieId}/recommendations`
    )
    return response.data
  } catch (error) {
    console.error(error)
  }
}
