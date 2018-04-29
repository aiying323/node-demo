import Vue from 'vue'
import local from './local'
export const USER_SET = 'USER_SET';
export const USER_CLEAR = 'USER_CLEAR';

export default {
  state:local.getItem('user') || {
    userId: '',
    userName: '',
    type: '',
    token: ''
  },
  mutations: {
    [USER_SET](state, user) {
      Object.assign(state, user);
      local.setItem('user',state);
      console.log(user);
    },
    [USER_CLEAR](state) {
      Object.keys(state).forEach(k => Vue.delete(state, k));
      local.removeItem('user');
     
    }
  },
  actions: {
    async [USER_SET]({ commit, state }, user) {
      try {
        // if (!state.userId) {
        await commit(USER_SET, user);
        // }
      } catch (error) {
        throw (new Error(error));
      }
    },
     async [USER_CLEAR]({ commit, state }) {
      try {
        commit(USER_CLEAR);
      } catch (error) {
        throw (new Error(error));
      }
    },
  }
}
