module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:vue/essential'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    uni: true,
    getCurrentPages: true
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {},
};
