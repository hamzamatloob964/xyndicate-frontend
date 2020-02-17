import Vue from 'vue'
import Vuex from 'vuex'
import userStore from './userStore'
import syndicateStore from './syndicateStore'
import jobStore from './jobStore'
import eventStore from './eventStore'
import {get} from '../services/RestService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authChecked: false
  },
  mutations: {
    "SET_AUTHCHECK": (state) => {
      Vue.set(state, 'authChecked', true);
    }
  },
  getters: {
    deleteMe: (state) => {
      return 'hello';
    }
  },
  actions: {
    checkSession: ({commit, dispatch}) => {
      return new Promise((resolve, rejec) => {
        let token = localStorage.getItem('ser');
        
        if(!token) {
          commit("SET_AUTHCHECK");
          resolve(true);
          return;
        }

        get('users')
          .then(res => {
            commit("userStore/SET_USER", res);
            commit("syndicateStore/SET_SYNDICATES", res.syndicates);
            commit("userStore/SET_TOKEN", res.token);
            commit("SET_AUTHCHECK");
            resolve(true);
          })
          .catch(err => {
            commit("SET_AUTHCHECK");
            resolve(false);
          })
      })
    }
  },
  modules: {
    userStore: {
      namespaced: true,
      ...userStore
    },
    syndicateStore: {
      namespaced: true,
      ...syndicateStore
    },
    jobStore: {
      namespaced: true,
      ...jobStore
    },
    eventStore: {
      namespaced: true,
      ...eventStore
    }
  }
})
