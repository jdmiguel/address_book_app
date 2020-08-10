module.exports = {
  extends: [
    'eslint-config-airbnb',
    'eslint-config-prettier',
    'eslint-config-prettier/react',
  ].map(require.resolve),

  globals: {
    jest: true,
    describe: true,
    it: true,
    expect: true,
  },

  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
};
