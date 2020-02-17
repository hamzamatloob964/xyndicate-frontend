import Vue from 'vue'
import {post, put, get} from  '../services/RestService'

const initialState = {
};

export default {
  state: {

    postEvent: {},
    activeEvent: {},
    events: null,

  },
  
  mutations: {

    "POST_EVENT": (state, data) => {
      Vue.set(state, 'postEvent', data);
    },
    
    "SET_EVENTS": (state, data) => {
      Vue.set(state, 'events', data);
    },

    "SET_ACTIVE_EVENT": (state, data) => {
      Vue.set(state, 'activeEvent', data);
    },

  },
  
  getters: {

  },
  
  actions: { 

    createEvent: ({commit}, data) => {
      return new Promise((resolve, reject) => {

        post('events', data)
          .then(res => {
            commit('SET_ACTIVE_EVENT', res)
            resolve(res)
          })
          .catch(err => {
            reject(err);
          })

      })
    },

    getEvent: ({state, commit}, id) => {
      return new Promise((resolve, reject) => {

        // if(state.activeSyndicate && state.activeSyndicate._id === id)
        // {
        //   resolve(state.activeSyndicate);
        //   return;
        // }

        get('events/' + id)
          .then(res => {
            commit('SET_ACTIVE_EVENT', res) 
            resolve(res)
          })
          .catch(err => {
            reject(err);
          })

      })
    },

    getAllEvents: ({state, commit}) => {
      return new Promise((resolve, reject) => {

        get('events')
          .then(res => {
            commit('SET_EVENTS', res) 
            resolve(res)
          })
          .catch(err => {
            reject(err);
          })

      })
    }

  }
  
}