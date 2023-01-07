test("getFetchCardsAsync", async () => {
  const cards = await getFetchCardsAsync();
  expect(Object.keys(cards).length).toBeGreaterThan(0);
});

test("getFetchCards", () => {
  return getFetchCards().then((cards) => {
    expect(Object.keys(cards).length).toBeGreaterThan(0);
  });
});
