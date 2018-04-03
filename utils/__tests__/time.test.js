import {timestampToSeconds} from '../time'

describe('utils#timestampToSeconds', () => {
  const testData = [
    //seconds
    [':1', 1],
    [':11', 11],
    [':01', 1],
    //minutes:seconds
    ['0:01', 1],
    ['1:01', 61],
    ['01:01', 61],
    ['10:01', 601],
    //hours:minutes:seconds
    ['0:01:00', 60],
    ['01:00:01', 3601],
    ['10:00:00', 36000],
  ]

  testData.map(([format, expected]) => {
    it(`parses "${format}"`, () => {
      expect(timestampToSeconds(format)).toBe(expected)
    })
  })
})
