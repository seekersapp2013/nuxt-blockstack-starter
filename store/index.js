// @prefix statetemplate
// @description 

import axios from 'axios';
var STORAGE_FILE = 'blockstack-data.json';

//state
export const state = () => ({
  userSession: null,
  appData: [],
});

// mutations
export const mutations = {

  SET_USER(state, userSession) {
    state.userSession = userSession || null
  },

  SAVE_DATA_TO_GAIA(state, data) {
    let data = state.appData;
    state.userSession.putFile(STORAGE_FILE, JSON.stringify(data))
  },

  LOAD_WORKSPACE(state, blockstackData) {
    let gaiaData = JSON.parse(blockstackData);
    state.appData = gaiaData;
  },

  CLOSE_USER_SESSION(state) {
    state.userSession.signUserOut(window.location.href);
  }

}

// actions
export const actions = {

  async loadDataFromGaia({ commit, state }) {
    try {

      await state.userSession.getFile(STORAGE_FILE).then((responseData) => {
        if (responseData && responseData.length > 0) {
          commit('LOAD_WORKSPACE', responseData);
        }
      });

    } catch (e) {
      console.log(e)
    }
  },

  saveData({ commit }, data) {
    commit('SAVE_DATA_TO_GAIA', data);
  },

  saveWorkspaceAndSignout({ commit }) {
    commit('SAVE_DATA_TO_GAIA');
  },

  signout({ commit }) {
    commit('CLOSE_USER_SESSION');
  }

}

// getters
export const getters = {
  isAuthenticated: state => !!state.userSession,
  loggedUser: state => state.userSession,
}