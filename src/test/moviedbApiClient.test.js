import {
  getGenreMovieListAxiosAsync,
  getMovieDetailsAxios,
  getMoviesByGenreAxios,
  getMoviesBySearchAxios,
  getMoviesRecommendationsAxios,
  getTrendingAxios,
  getTrendingAxiosAsync,
  getTrendingFetch,
  getTrendingFetchAsync,
} from '../client/movieDbApiClient'

test('test getTrendingAxiosAsync', async () => {
  const trending = await getTrendingAxiosAsync()
  expect(Object.keys(trending).length).toBeGreaterThan(0)
})

test('test getTrendingFetchAsync', async () => {
  const trending = await getTrendingFetchAsync()
  expect(Object.keys(trending).length).toBeGreaterThan(0)
})

test('test getTrendingFetch', () => {
  return getTrendingFetch().then((trending) => {
    expect(Object.keys(trending).length).toBeGreaterThan(0)
  })
})

test('test getTrendingAxios', () => {
  return getTrendingAxios().then((trending) => {
    expect(Object.keys(trending).length).toBeGreaterThan(0)
  })
})

test('test getGenreMovieListAxiosAsync', async () => {
  const genreMovieList = await getGenreMovieListAxiosAsync()
  expect(Object.keys(genreMovieList).length).toBeGreaterThan(0)
})

test('test getMoviesByGenreAxios', async () => {
  const moviesByGenre = await getMoviesByGenreAxios(12)
  expect(Object.keys(moviesByGenre).length).toBeGreaterThan(0)
})

test('test getMoviesBySearchAxios', async () => {
  const moviesBySearch = await getMoviesBySearchAxios('batman')
  expect(Object.keys(moviesBySearch).length).toBeGreaterThan(0)
})
test('test getMovieDetailsAxios', async () => {
  const movieDetails = await getMovieDetailsAxios(550)
  expect(Object.keys(movieDetails).length).toBeGreaterThan(0)
})

test('test getMoviesRecommendationsAxios', async () => {
  const moviesRecommendations = await getMoviesRecommendationsAxios(550)
  expect(Object.keys(moviesRecommendations).length).toBeGreaterThan(0)
})
