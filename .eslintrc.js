module.exports = {
  // 表示当前目录为根目录 , ESLint规则将被限制到该目录下
  root: true,
  // env 表示启用esLint检测环境
  env: {
    // 在node环境下启动ESlint检测
    node: true,
  },
  // ESLint 重基础配置需要继承的配置
  extends: ['plugin:vue/vue3-essential', '@vue/standard'],
  // 解析器
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  // 错误分为3级
  // 0 或 off 关闭
  // 1 或 warn 开启规则 会对规则校验 , 不会导致程序错误
  // error 或 2 开启规则 error 触发时 程序会退出
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // "quotes" : "warn"
    semi: 'off',
    'comma-dangle': 'off',
    'import/no-duplicates': ['error', { considerQueryString: false }],
    // 关闭组件命名规则
    'vue/multi-word-component-names': 'off',
    'no-tabs': 'off',
    'space-before-function-paren': 'off',
  },
};
