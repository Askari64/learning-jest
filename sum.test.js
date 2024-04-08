const sum = require('./sum')

test("Testing sum fn", ()=> (
    expect(sum()).toBe(3)
))