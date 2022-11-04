const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('shuffleArray should return an array', () =>{
        expect.arrayContaining(shuffleArray)
    })
    test('shuffleArray is the same length as the argument sent in', () =>{
        expect(shuffleArray.length).toStrictEqual(shuffleArray.length)
    })
})