const {shuffleArray} = require('./utils')

let testArr1 = [1, 2, 3, 4]

describe('shuffleArray should', () => {
    test('shuffleArray should return an array', () =>{
        expect(Array.isArray(shuffleArray([1,2,3,4]))).toBe(true)
    })
    test('shuffleArray is the same length as the argument sent in', () =>{
        expect(shuffleArray(testArr1)).toHaveLength(testArr1.length)
    })
})