test("getHeroes with axios Async", async () => {
  const heroes = await getHeroesAxiosAsync();
  expect(heroes.length).toBeGreaterThan(0);
});

test("getHeroes with fetch Async", async () => {
  const heroes = await getHeroesFetchAsync();
  expect(heroes.length).toBeGreaterThan(0);
});
