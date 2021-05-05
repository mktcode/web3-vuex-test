const Web3 = require('web3')
const abi = require('../Octobay.json').abi

export const state = () => ({
  octobay: null
})

export const getters = {
  octobay(state) {
    return state.octobay
  },
}

export const mutations = {
  setOctobay(state, contract) {
    state.octobay = contract
  },
}

export const actions = {
  update({ commit }) {
    const web3 = new Web3(window.ethereum)
    const octobay = new web3.eth.Contract(
      abi,
      '0x469419996A506420E1B60e0c3c0cC8463d7ad28b'
    )
    commit('setOctobay', octobay)
  },
}
