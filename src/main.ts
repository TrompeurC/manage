import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store/index';
import 'normalize.css';
import '@/assets/css/index.less';

import '@/services';
const app = createApp(App);

app.use(router).use(store).mount('#app');
