module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'react-refresh/only-export-components': 'off',
    'react-hooks/exhaustive-deps': 'off'
  }
}
