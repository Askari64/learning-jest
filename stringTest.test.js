const stringTest = require('./stringTest')

//complete matching
test('testing string', ()=> (
    expect(stringTest).toMatch("Hello")
))

//partial matching - PASS'
test('Testing string partial matching',()=> (
    expect(stringTest).toMatch(/llo/)
))

//partial matching - FAIL'
test('Testing string partial matching',()=> (
    expect(stringTest).toMatch(/loo/)
))


//not match - PASS
test('not match',()=>(
    expect(stringTest).not.toMatch("hi")
))

//not match - FAIL
test('not match',()=>(
    expect(stringTest).not.toMatch("Hello")
))