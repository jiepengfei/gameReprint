module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: ['error', 'always'], // 分号
    'max-len': ['error', { code: 100 }], // 单行最大长度
    'comma-dangle': ['error', 'always-multiline'], // 拖尾逗号
  },
};
