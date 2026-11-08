import { createStore } from 'vuex'
import user from './modules/user'
import tasks from './modules/tasks'

export default createStore({
  modules: {
    user,
    tasks
  }
})
