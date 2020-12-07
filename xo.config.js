/// github.com/xojs/xo
/// github.com/avajs/ava
module.exports = {
  envs: [
    'es6',
    'es2017',
    'browser',
    'node',
    'shared-node-browser'
  ],
  rules: {
    'block-scoped-var': 0
  },
  ignores: [
    'xo.config.js',
    '**/*.test.js'
  ],
  space: 2,
  semicolon: false,
  esnext: false
}
