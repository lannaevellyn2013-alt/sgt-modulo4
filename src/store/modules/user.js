const readStoredUser = () => {
  try {
    const stored = JSON.parse(localStorage.getItem('sgt-user'))
    if (stored && typeof stored === 'object' && typeof stored.email === 'string') {
      return { name: typeof stored.name === 'string' ? stored.name : '', email: stored.email }
    }
  } catch {
    // Se houver dados inválidos no armazenamento, inicia sem usuário.
  }
  return null
}

const emptyUser = () => ({ name: '', email: '' })

export default {
  namespaced: true,
  state: () => ({ user: readStoredUser() || emptyUser() }),
  mutations: {
    SET_USER(state, user) {
      state.user = { name: user.name || '', email: user.email || '' }
      try {
        localStorage.setItem('sgt-user', JSON.stringify(state.user))
      } catch {
        // O estado Vuex continua disponível mesmo se o armazenamento estiver indisponível.
      }
    },
    CLEAR_USER(state) {
      state.user = emptyUser()
      try {
        localStorage.removeItem('sgt-user')
      } catch {
        // Ignora indisponibilidade do armazenamento local.
      }
    }
  },
  getters: {
    currentUser: state => state.user
  },
  actions: {
    login({ commit }, user) {
      commit('SET_USER', user)
    },
    logout({ commit }) {
      commit('CLEAR_USER')
    }
  }
}
