import Vue from 'vue'
import {post, put} from  '../services/RestService'

const initialState = {
};

export default {
  state: {
  },
  
  mutations: { 
    "SET_USER": (state, payload) => {
      for(let prop in payload) {
        Vue.set(state, prop, payload[prop]);
      }
    },
    "SET_TOKEN": (state, token) => {
      localStorage.setItem('ser', token);
      Vue.set(state, 'token', token);
    },
    "RESET_STATE": (state) => {
      for(let prop in state)
        Vue.set(state, prop, null);
    }
  },
  
  getters: {

    isAuthenticated: state => {
      return !!state.token;
    }

  },
  
  actions: { 

    signUp: ({dispatch, commit}, payload) => {
      return new Promise((resolve, reject) => {

        post('users/signup', payload)
          .then(res => {
            commit("SET_USER", res);
            commit("SET_TOKEN", res.token);
            localStorage.setItem('ser', res.token);
            resolve();
          })
          .catch(err => {
            reject(err);
          });

      })
    },

    signIn: ({commit}, payload) => {
      return new Promise((resolve, reject) => {

        post('users/login', payload)
          .then(res => {
            commit("SET_USER", res);
            commit("SET_TOKEN", res.token);
            commit("syndicateStore/SET_SYNDICATES", res.syndicates, {root: true});
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });

      })
    },

    logout: ({commit}) => {
      localStorage.removeItem('ser');
      commit("RESET_STATE");
    },

    updateUser: ({commit}, data) => {
      return new Promise((resolve, reject) => {

        put('users', data)
          .then(res => {
            commit('SET_USER', res)  
            resolve(res)
          })
          .catch(err => {
            reject(err);
          })

      })
    }

  }
  
}