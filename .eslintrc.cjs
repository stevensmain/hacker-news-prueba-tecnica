module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    './node_modules/ts-standard/eslint.json',
    'standard-with-typescript',
    'plugin:react/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off'
  }
}
