import Vue from 'vue'
import {post, put, get} from  '../services/RestService'

const initialState = {
};

export default {
  state: {

    postJob: {},
    activeJob: {},
    jobs: null,

  },
  
  mutations: {

    "POST_JOB": (state, data) => {
      Vue.set(state, 'postJob', data);
    },
    
    "SET_JOBS": (state, data) => {
      Vue.set(state, 'jobs', data);
    },

    "SET_ACTIVE_JOB": (state, data) => {
      Vue.set(state, 'activeJob', data);
    },

  },
  
  getters: {

  },
  
  actions: { 

    createJob: ({commit}, data) => {
      return new Promise((resolve, reject) => {

        post('jobs', data)
          .then(res => {
            commit('SET_ACTIVE_JOB', res)
            resolve(res)
          })
          .catch(err => {
            reject(err);
          })

      })
    },

    getJob: ({state, commit}, id) => {
      return new Promise((resolve, reject) => {

        // if(state.activeSyndicate && state.activeSyndicate._id === id)
        // {
        //   resolve(state.activeSyndicate);
        //   return;
        // }

        get('jobs/' + id)
          .then(res => {
            commit('SET_ACTIVE_JOB', res) 
            resolve(res)
          })
          .catch(err => {
            reject(err);
          })

      })
    },

    getAllJobs: ({state, commit}) => {
      return new Promise((resolve, reject) => {

        get('jobs')
          .then(res => {
            commit('SET_JOBS', res) 
            resolve(res)
          })
          .catch(err => {
            reject(err);
          })

      })
    }

  }
  
}