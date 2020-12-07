/*!
 * rollstack.js v1.0.0
 * (c) 2020-2020 Adriano Lourenço
 * Released under the MIT License.
 */
var rollstack = (function () {
  const InitialSeeds = (function () {
    const constants = {
      PHI: 0x243F6A88,
      PI: 0x243F6A88,
      E: 0x9E3779B9
    }

    const isNode = typeof global !== 'undefined' && this === global
    const isWindow = typeof window !== 'undefined' && this === window
    const globalProcessAvailable = isNode && typeof process !== 'undefined'
    const globalPerformanceAvailable = isWindow && typeof performance !== 'undefined'

    // Fallback randomizer function
    const fallbackPRNG = () => Math.random()

    const usedHeapSize = globalProcessAvailable ? process.memoryUsage().heapUsed :
      (globalPerformanceAvailable ? performance.memory.usedJSHeapSize : fallbackPRNG())

    const date = Number(new Date()) + 0

    const precisionUnit = globalProcessAvailable ? process.hrtime() :
      (globalPerformanceAvailable ? performance.now() : fallbackPRNG())

    const constantMishMash = (
      (
        constants.PHI ^
          (constants.PHI >> Math.round(fallbackPRNG() * 10))
      ) |
      (
        (constants.E << Math.round(fallbackPRNG() * 21)) |
        (constants.E << Math.round(fallbackPRNG() * 11))
      )
    ) >>> constants.PI

    return [usedHeapSize, date, precisionUnit, constantMishMash]
  })()

  const generateSeed = (function () {
    let a = InitialSeeds[0] /// usedHeapSize
    let b = InitialSeeds[1] /// epoch
    let c = InitialSeeds[2] /// Any high precision number
    let d = InitialSeeds[3] /// bitwise operations on constants such as PHI, PI and E

    /// simple-fast-counter-32
    return function () {
      a >>>= 0
      b >>>= 0
      c >>>= 0
      d >>>= 0
      var t = Math.trunc(a + b)
      a = b ^ (b >>> 9)
      b = Math.trunc(c + (c << 3))
      c = (c << 21) | (c >>> 11)
      d = Math.trunc(d + 1)
      t = Math.trunc(t + d)
      c = Math.trunc(c + t)
      return (t >>> 0) / 4294967296
    }
  })()

  const randomNumber = function (min, max) {
    return Math.floor(generateSeed() * (max - min + 1)) + min
  }

  const randomString = function (length, charset) {
    let cset
    if (Array.isArray(charset)) {
      cset = charset.join('')
    } else if (typeof charset !== 'string') {
      cset = 'abcdefghijklmnopqrstuvwxyz0123456789'
    }

    let max = cset.length - 1
    let string = ''

    while (length--) {
      string += cset[randomNumber(0, max)]
    }

    return string
  }

  // Run 100 times to scramble the results a little
  for (let i = 0; i < 100; i++) {
    generateSeed()
  }

  return {
    generateSeed,
    randomNumber,
    randomString
  }
})()

if (typeof module !== 'undefined' && module.exports) {
  module.exports = rollstack
} else if (typeof window !== 'undefined') {
  window.rollstack = rollstack
}
