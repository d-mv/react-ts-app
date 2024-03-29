module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jsdoc/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:eslint-comments/recommended',
    'plugin:json/recommended',
    'plugin:css-modules/recommended',
    'plugin:jsx-control-statements/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: 'tsconfig.json',
    tsconfigRootDir: '.',
  },
  settings: {
    // 'import/resolver': {
    //   'babel-module': {},
    // },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'promise',
    'optimize-regex',
    'sonarjs',
    'better-styled-components',
    'jest',
    'filenames',
    'jsdoc',
    'import',
    'babel',
    'html',
    'eslint-comments',
    'json',
    'markdown',
    'css-modules',
    'optimize-regex',
    'spellcheck',
    'jsx',
    'jsx-control-statements',
    'async-await',
  ],
  rules: {
    'jsx-quotes': ['error', 'prefer-single'],
    'jsx/factory-in-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'styled-components',
            message: 'Please import from styled-components/macro.',
          },
        ],
        patterns: ['!styled-components/macro'],
      },
    ],
    'filenames/match-regex': [2, '^[a-z_]+$', true],
    'filenames/match-exported': [
      2,
      [null, '\\.test$', '\\.style$', '\\service$'],
    ],
    'filenames/no-index': 2,
    'json/*': ['error', 'allowComments'],
    'import/no-unresolved': 'error',
    'optimize-regex/optimize-regex': 'warn',
    'spellcheck/spell-checker': [
      1,
      {
        comments: true,
        strings: true,
        identifiers: true,
        lang: 'en_US',
        skipWords: ['dict', 'aff', 'utils', 'eslint'],
        skipIfMatch: [
          'http://[^s]*',
          '^[-\\w]+/[-\\w\\.]+$', //For MIME Types
        ],
        skipWordIfMatch: [
          '^eslint.*$', // words that begin with foobar will not be checked
        ],
        minLength: 3,
      },
    ],
    'jsx/uses-factory': [1, { pragma: 'JSX' }],
    'jsx/factory-in-scope': [1, { pragma: 'JSX' }],
    'jsx/mark-used-vars': 1,
    'jsx/no-undef': 1,
    'async-await/space-after-async': 2,
    'async-await/space-after-await': 2,
    'react/jsx-no-undef': [2, { allowGlobals: true }],
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
  },
};
