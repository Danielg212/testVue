import Vue from 'vue'
import Vuex from 'vuex'
import { UserDetails } from './models/models';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedUser:{} as UserDetails

  },
  mutations: {
    update(state,userDetails:UserDetails){
      state.selectedUser = userDetails;
    },
    reset(state){
      state.selectedUser = {} as UserDetails;
    }

  },
  actions: {

  },

  getters:{
    user(state){
      return state.selectedUser;
    }
  }
})
