import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const path = require('path');
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        // modifyVars: {
        //     hack: `true; @import (reference) "${path.resolve("src/assets/css/base.less")}";`,
        // },
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 路径别名
    },
    extensions: ['.js', '.json', '.ts'], // 使用路径别名时想要省略的后缀名，可以自己 增减
  },
});
