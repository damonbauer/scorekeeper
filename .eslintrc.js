module.exports = {
  'parser': 'babel-eslint',
  'rules': {
    'indent': [2, 2],
    'quotes': [2, 'single'],
    'linebreak-style': [2, 'unix'],
    'semi': ['error', 'always', { 'omitLastInOneLineBlock': true}],
    'no-console': 0,
  },
  'env': {
    'es6': true,
    'browser': true
  },
  "globals": {
    "require": true
  },
  'extends': ['eslint:recommended', 'plugin:react/recommended'],
  'parserOptions': {
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
      'experimentalObjectRestSpread': true
    }
  },
  'plugins': ['react']
};
