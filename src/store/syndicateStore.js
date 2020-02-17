import Vue from 'vue'
import {post, put, get} from  '../services/RestService'

const initialState = {
};

export default {
  state: {
    syndicates: [],
    activeSyndicate: null
  },
  
  mutations: { 

    "SET_SYNDICATES": (state, data) => {
      Vue.set(state, 'syndicates', data);
    },

    "SET_ACTIVE_SYNDICATE": (state, data) => {
      Vue.set(state, 'activeSyndicate', data);
    },

    "ADD_SYNDICATE": (state, syndicate) => {
      state.syndicates.push({
        _id: syndicate._id,
        name: syndicate.name
      });
    }

  },
  
  getters: {

  },
  
  actions: { 

    createSyndicate: ({commit}, data) => {
      return new Promise((resolve, reject) => {

        post('syndicates', data)
          .then(res => {
            commit('SET_ACTIVE_SYNDICATE', res)  
            commit('ADD_SYNDICATE', res)  
            resolve(res)
          })
          .catch(err => {
            reject(err);
          })

      })
    },

    updateSyndicate: ({commit}, data) => {
      return new Promise((resolve, reject) => {

        put('syndicates/' + data._id, data)
          .then(res => {
            commit('SET_ACTIVE_SYNDICATE', res)  
            // commit('ADD_SYNDICATE', res)  
            resolve(res)
          })
          .catch(err => {
            reject(err);
          })

      })
    },

    getSyndicate: ({state, commit}, id) => {
      return new Promise((resolve, reject) => {

        if(state.activeSyndicate && state.activeSyndicate._id === id)
        {
          resolve(state.activeSyndicate);
          return;
        }

        get('syndicates/' + id)
          .then(res => {
            commit('SET_ACTIVE_SYNDICATE', res) 
            resolve(res)
          })
          .catch(err => {
            reject(err);
          })

      })
    }

  }
  
}