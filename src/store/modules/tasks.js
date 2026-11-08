const readStoredTasks = () => {
  try {
    const stored = JSON.parse(localStorage.getItem('sgt-tasks'))
    return Array.isArray(stored) ? stored : null
  } catch {
    return null
  }
}

const persistTasks = tasks => {
  try {
    localStorage.setItem('sgt-tasks', JSON.stringify(tasks))
  } catch {
    // O estado Vuex continua funcionando durante a sessão.
  }
}

const initialTasks = [
  { id: 1, title: 'Tarefa 1', description: 'Descrição da tarefa 1.', status: 'pendente', createdAt: '2026-09-13' },
  { id: 2, title: 'Tarefa 2', description: 'Descrição da tarefa 2.', status: 'pendente', createdAt: '2026-09-13' },
  { id: 3, title: 'Tarefa 3', description: 'Descrição da tarefa 3.', status: 'pendente', createdAt: '2026-09-13' },
  { id: 4, title: 'Tarefa 4', description: 'Descrição da tarefa 4.', status: 'pendente', createdAt: '2026-09-13' },
  { id: 5, title: 'Tarefa 5', description: 'Descrição da tarefa 5.', status: 'pendente', createdAt: '2026-09-13' },
  { id: 6, title: 'Tarefa 6', description: 'Descrição da tarefa 6.', status: 'pendente', createdAt: '2026-09-13' }
]

export default {
  namespaced: true,
  state: () => ({ tasks: readStoredTasks() || initialTasks }),
  mutations: {
    ADD(state, task) {
      state.tasks.unshift(task)
      persistTasks(state.tasks)
    },
    UPDATE(state, task) {
      const index = state.tasks.findIndex(item => item.id === task.id)
      if (index !== -1) state.tasks.splice(index, 1, task)
      persistTasks(state.tasks)
    },
    DELETE(state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id)
      persistTasks(state.tasks)
    }
  },
  getters: {
    allTasks: state => state.tasks,
    taskById: state => id => state.tasks.find(task => task.id === Number(id))
  },
  actions: {
    addTask({ commit }, task) {
      commit('ADD', task)
    },
    updateTask({ commit }, task) {
      commit('UPDATE', task)
    },
    deleteTask({ commit }, id) {
      commit('DELETE', Number(id))
    },
    completeTask({ state, commit }, id) {
      const task = state.tasks.find(item => item.id === Number(id))
      if (task) commit('UPDATE', { ...task, status: 'concluida' })
    }
  }
}
