const test = require('ava')
const { generateSeed, randomNumber, randomString } = require('../src/rollstack')

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

function testRandomStringCharset(set, compare) {
  let regex = new RegExp(`^[${compare}]+$`);
  return regex.test(randomString(1000, set))
}

test('#randomString return should contain only chars in the set [alphabet]', t => {
  t.true(testRandomStringCharset('alphabet', 'abcdefghijklmnopqrstuvwxyz'));
})

test('#randomString return should contain only chars in the set [number]', t => {
  t.true(testRandomStringCharset('number', '0123456789'))
})

test('#randomString return should contain only chars in the set [hex]', t => {
  t.true(testRandomStringCharset('hex', '0123456789abcdef'))
})

test('#randomString return should contain only chars in the set [base64]', t => {
  t.true(testRandomStringCharset('base64', 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'))
})

test('#randomString return should contain only chars in the set [alphanum]', t => {
  t.true(testRandomStringCharset('alphanum', '0123456789abcdefghijklmnopqrstuvwxyz'))
})

test('#randomString return should contain only chars in the set [custom]', t => {
  t.true(testRandomStringCharset(['aBçOI23'], 'aBçOI23'))
})

test('#randomString should throw an error with invalid charset name', t => {
  t.throws(() => {
    randomString(10, 'ascii')
  }, {
    message: 'Unknown charset name'
  })
})

