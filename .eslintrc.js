module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'node', 'prettier'],
  plugins: ['prettier', 'node'],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    'import/no-commonjs': 0,
    'no-console': 0,
    'no-underscore-dangle': 0,
    'prettier/prettier': 2,
    semi: 0,
  },
}
