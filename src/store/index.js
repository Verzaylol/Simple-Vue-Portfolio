import { createStore } from 'vuex'

const store = createStore({
  state: {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '555-555-5555',
    message: ''
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    },
    updateEmail(state, payload) {
      state.email = payload
    },
    updatePhone(state, payload) {
      state.phone = payload
    },
    updateMessage(state, payload) {
      state.message = payload
    }
  },
  actions: {
    updateName({ commit }, payload) {
      commit('updateName', payload)
    },
    updateEmail({ commit }, payload) {
      commit('updateEmail', payload)
    },
    updatePhone({ commit }, payload) {
      commit('updatePhone', payload)
    },
    updateMessage({ commit }, payload) {
      commit('updateMessage', payload)
    }
  },
  getters: {
    getName(state) {
      return state.name
    },
    getEmail(state) {
      return state.email
    },
    getPhone(state) {
      return state.phone
    },
    getMessage(state) {
      return state.message
    }
  }
})

export default store
