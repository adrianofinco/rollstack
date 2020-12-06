const test = require('ava')
const { generateSeed, randomNumber, randomString } = require('../src/index')

test('#generateSeed must always be return a number between 0 and 1', t => {
  for (i = 0; i < 10000; i++) {
    seed = generateSeed()
    if (seed <= 0) t.fail('seed lesser/equal 0')
    else if (seed >= 1) t.fail('seed greater/equal 1')
  }
  t.pass()
})

test('#randomNumber should return a number in range', t => {
  let max = 50
  let min = 1
  for (i = 0; i < 10000; i++) {
    value = randomNumber(1, 50)
    if (value < min) t.fail('randomNumber not in range (lesser)')
    if (value > max) t.fail('randomNumber not in range (greater)')
  }
  t.pass()
})

test('#randomString should return a string with specified length', t => {
  let size = 20
  t.is(randomString(size).length, size)
})


