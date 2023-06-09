const {addCuriousFacts} = require('./javascript/js')

describe('function addCuriousFacts()', () => {
    it("should be declared", ()=>{
        expect(typeof addCuriousFacts).toBe("function")
    })
})