import { createStore } from 'vuex'
import http from '../server/server.config.js'
import createPersistedState from "vuex-persistedstate";
import router from '../router/index'

export default createStore({
  state: {
    userDetails: null,
    amount : '5600',
    error : '',
    isLoggedIn : false,
    cardData : null,
    testData: null
  },
  mutations: {
    register(state, user){
      state.userDetails = user
    },
    logout(state){
      state.userDetails = null;
      state.isLoggedIn = false
      state.error = null
      state.cardData = null
      state.amount = null,
      state.testData = null
    },
    addCard(state, card){
      state.cardData = card
    },
    loggedIn(state){
      state.isLoggedIn = true
    },
    newCard(state, card){
      state.testData = card
    }
  },
  actions: {
    registerUser : async ({commit, state}, user) => {
      commit('register', user);

        await http.post("/register", {
          username : state.userDetails.username,
          password : state.userDetails.password,
          email : state.userDetails.email
        })
        
        .then((response) => {

          state.userDetails.id = response.data._id
          commit('register', state.userDetails)
          commit('loggedIn')

          state.error = null
          router.push('/')
        })

        .catch((error) => {
          state.error = error.response.data.message
          const userr = null
          commit('register', userr)
        })

    },
    loginUser: async ({commit, state}, user) => {
      state.error = null
      commit('register', user);

        await http.post("/login", {
          email : state.userDetails.email,
          password : state.userDetails.password,
        })
        
        .then((response) => {

          state.userDetails.id = response.data._id
          state.userDetails.username = response.data.username
          commit('loggedIn')
          commit('register', state.userDetails)

          state.error = null
          // state.error = `Success: ${state.userDetails.username} has been logged in successfully`
          router.push('/')
        })

        .catch((error) =>{
          state.error = error.response.data.message
        })

    },
    logoutUser: async ({commit, state}) => {
      try{
        await http.post('/logout')
        .then((response) =>{
          commit('logout')

          router.push('/login')
        })
      }catch(err){
        console.log(err)
      }
    },
    addNewCard : async ({commit, state}, card) => {
      commit('newCard', card)
      await http({
        baseURL : 'http://localhost:3000/payapi/',
        url : '/card',
        method : 'POST',
        data: {
          cardType : state.testData.cardType,
          cardNumber: state.testData.cardNumber,
          exp: state.testData.exp,
          pin: state.testData.pin,
          id: state.userDetails.id
        }
      })
      .then((response) => {
        console.log(response)
        state.error = null
      })

      .catch((error) => {
        state.error = error.response.data.message
      })
    },
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
