module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'log'],
      },
    ],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        ObjectExpression: 1,
      },
    ],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-unused-vars': [
      'error',
      {
        args: 'none',
        ignoreRestSiblings: true,
        vars: 'all',
      },
    ],
  },
};
