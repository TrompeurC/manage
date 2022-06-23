import { Module } from 'vuex';
import { ILoginState, IRootState } from '../type';

export const login: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
    };
  },
  mutations: {},
  actions: {},
  getters: {},
};
