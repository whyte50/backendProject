import { createStore } from 'vuex'
import http from '../server/server.config.js'
import axios from 'axios'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    userDetails: {
      username: '',
      password: '',
      email: '',
    }
  },
  mutations: {
    register(state, user){
      state.userDetails = user
    }
  },
  actions: {
    registerUser : async ({commit, state}, user) => {
      commit('register', user);
      await http.post("/register" , {
            username : state.userDetails.username,
            password : state.userDetails.password,
            email : state.userDetails.email
      })
      .then((response) => {
        console.log('registered')
        console.log(response)
      }) .catch(err => {
        console.log(err)
      })

    }
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
