const fetchData = require("./asyncAwait");

test('Test async await', async()=> {
    const data = await fetchData()
    expect(data).toBe("Resolved promise")
})