// mocha Day3/test/Day3-1-test.js

var assert = require('assert');

const { loopThroughDataSet } = require('../Day3-1');

describe('Day3-1', function () {
  describe('Sample Data Provided', function () {
    it('should return 4361', function () {
      const dataToTest = 
`467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`

      const splitInput = dataToTest.split('\n')
      const result = loopThroughDataSet(splitInput)
      console.log(result)
      assert.equal(result, 4361)
    })
  })
})