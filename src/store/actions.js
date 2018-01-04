export default {
  actionAddContact: ({ commit }, contact) => {
    return new Promise((resolve, reject) => {
      commit('mutationAddContact', contact)
      resolve()
    })
  }
}
