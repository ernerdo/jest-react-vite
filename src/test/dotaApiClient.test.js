import {
  getHeroesAxios,
  getHeroesAxiosAsync,
  getHeroesFetch,
  getHeroesFetchAsync,
} from '../client/dotaApiClient'
test('getHeroes with fetch', () => {
  return getHeroesFetch().then((heroes) => {
    expect(heroes.length).toBeGreaterThan(0)
  })
})

test('getHeroes with axios', () => {
  return getHeroesAxios().then((heroes) => {
    expect(heroes.length).toBeGreaterThan(0)
  })
})

test('getHeroes with axios Async', async () => {
  const heroes = await getHeroesAxiosAsync()
  expect(heroes.length).toBeGreaterThan(0)
})

test('getHeroes with fetch Async', async () => {
  const heroes = await getHeroesFetchAsync()
  expect(heroes.length).toBeGreaterThan(0)
})
