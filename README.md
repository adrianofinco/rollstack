# Rollstack 2.0.0
A isomorphic javascript library for generating random data (including seeds, numbers and strings)

[![License](https://img.shields.io/github/license/adrianofinco/rollstack)](LICENSE)
[![Version](https://img.shields.io/npm/v/rollstack)](https://www.npmjs.com/package/rollstack)
[![Bundle size](https://img.shields.io/bundlephobia/minzip/rollstack)](https://www.npmjs.com/package/rollstack)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![Ava testing framework](https://img.shields.io/badge/Testing-AVA-4B0082.svg)](https://github.com/avajs/ava)

# Installation
## Node
Install the package
```sh
npm install rollstack
```
Import the module into your application
```js
const rollstack = require('rollstack') 
```

# Browser
For usage in the browser add one of the following CDN's
The global variable ```rollstack``` will then be available
```html
<script src="https://cdn.jsdelivr.net/npm/rollstack"></script>
<!-- or -->
<script src="https://unpkg.com/rollstack"></script>
```

# Usage

## randomSeed()
Generate a random float number. this number can be used to seed other randomizer functions
```js
let seed = rollstack.generateSeed()
console.log(seed)
```

## randomNumber()
Generate random integer number between a specified range (inclusive)
```js
// number between 1 and 10 (including 1 and 10)
let num = rollstack.randomNumber(1, 10)
console.log(num)
```

## randomString()
Generate random string with specified length
```js
let str = rollstack.randomString(10)
console.log(str)
```

### randomString() with predefined character sets
You can optionally use a predefined set of character: options are
| Set name | Characters                                                       |
|----------|------------------------------------------------------------------|
| alphabet | abcdefghijklmnopqrstuvwxyz                                       |
| number   | 0123456789                                                       |
| hex      | 0123456789abcdef                                                 |
| base64   | ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/ |
| alphanum | 0123456789abcdefghijklmnopqrstuvwxyz                             |
alphanum is the default charset
```js
let str = rollstack.randomString(10, 'hex')
console.log(str)
```

### randomString() with custom character set
To use a custom character set, provide an array of strings
```js
let str = rollstack.randomString(10, ['aBçOI23'])
console.log(str)
```

