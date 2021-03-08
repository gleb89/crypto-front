export const state = () => {
  return {
    crypto: [],



  }
}

export const mutations = {
  setCrypto(state, crypto) {
    state.crypto = crypto
  },


}

export const actions = {
  async fetch({ commit, state }) {
    const headers = {
      "Content-Type": "application/json"
    };
    const crypto = await this.$axios
      .$get(`https://apicrypto.ru/crypto`, {
        headers: headers
      })
    commit('setCrypto', crypto)

  }
}

export const getters = {
  crypto: s => s.crypto,


}