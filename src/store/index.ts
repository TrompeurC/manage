import { createStore } from 'vuex';
import { IRootState } from './type';

const store = createStore<IRootState>({
  state: () => {
    return {};
  },
  getters: {},
  actions: {},
  mutations: {},
  modules: {},
});

export default store;
