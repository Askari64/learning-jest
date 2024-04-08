const objTest = require('./object')

test('object test',()=>(
    expect(objTest()).toEqual({name: "Askari", age: 21})
))