import {
  getCardAxios,
  getCardsAxiosAsync,
  getCardsFetch,
  getCardsFetchAsync,
} from '../client/clashRoyalsApiClient'

test('getFetchCardsAsync', async () => {
  const cards = await getCardsFetchAsync()
  expect(Object.keys(cards).length).toBeGreaterThan(0)
})

test('getFetchCards', () => {
  return getCardsFetch().then((cards) => {
    expect(Object.keys(cards).length).toBeGreaterThan(0)
  })
})

test('getCardsAxiosAsync', async () => {
  const cards = await getCardsAxiosAsync()
  expect(Object.keys(cards).length).toBeGreaterThan(0)
})

test('getCardAxios', () => {
  return getCardAxios().then((cards) => {
    expect(Object.keys(cards).length).toBeGreaterThan(0)
  })
})
