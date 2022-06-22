module.exports = {
  // 表示当前目录即为根目录，ESLint 规则将被限制到该目录下
  root: true,
  env: {
    // browser: true,
    node: true,
    es2021: true,
    'vue/setup-compiler-macros': true,
  },
  // ESLint 中基础配置需要继承的配置
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue
    // 'plugin:vue/vue3-essential',
    // https://github.com/vuejs/eslint-config-standard
    // 'standard'
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // typescript-eslint推荐规则,
    'prettier',
    'plugin:prettier/recommended',
    './.eslintrc-auto-import.json',
  ], // 这是unplugin-auto-import/vite相关配置，自动引入vue相关api
  // 解析器
  parserOptions: {
    parser: 'babel-eslint',
  },
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  // 需要修改的启用规则及其各自的错误级别
  /**
   * 错误级别分为三种：
   * "off" 或 0 - 关闭规则
   * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
   * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   */
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'off',
  },
};
