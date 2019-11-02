
export const state = () => ({
  userSession: null,
})

export const mutations = {

  // BLOCKSTACK USER
  SET_USER(state, userSession) {
    state.userSession = userSession || null
  },

}

export const actions = {

}

export const getters = {
  loggedUser: state => state.userSession
}