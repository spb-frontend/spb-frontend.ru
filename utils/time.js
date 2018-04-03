export const timestampToSeconds = timestamp =>
  timestamp
    .split(':')
    .reverse()
    .reduce((seconds, current, positionFromRight) => {
      return seconds + current * Math.pow(60, positionFromRight)
    }, 0)
