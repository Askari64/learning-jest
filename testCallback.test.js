const testCallback = require('./testCallback')

test('testing callback function', (done) => { 
    function callback (data)
    {
        try {
            expect(data).toBe("Hello")
            done()
        }
        catch (err) {
            done()
        }
    }
    testCallback(callback)
 })