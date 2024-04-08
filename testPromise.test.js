const fetchData = require("./testPromise");

test("testing promise", () => {
  return fetchData().then((data) => {
    expect(data).toBe("Hello");
  });
});
