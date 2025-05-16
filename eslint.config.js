import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: ['react-hooks'],
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
    ],
    rules: {
      'react-hooks/rules-of-hooks': 'error', // 🔥 Enforce hook rules
      'react-hooks/exhaustive-deps': 'warn'  // 💡 Warn if deps missing
    }
  },
]
