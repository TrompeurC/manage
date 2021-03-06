import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/main',
    component: () => import('@/views/main/index.vue'),
  },
];

export default createRouter({
  routes,
  history: createWebHashHistory(),
});
