// github.com/xojs/xo
// github.com/avajs/ava
module.exports = {
  envs: [
    'es6',
    'es2017',
    'browser',
    'node',
    'shared-node-browser'
  ],
  globals: [

  ],
  ignores: [
    '.xo-config.js'
  ],
  space: 2,
  semicolon: false,
  esnext: true,
  overrides: [
    {
      files: [
        "**/*.test.js",
        "**/*.spec.js"
      ],
      "esnext": false,
    }
  ]
}