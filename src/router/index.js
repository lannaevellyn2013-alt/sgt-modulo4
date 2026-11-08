import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import CadastroView from '../views/CadastroView.vue'
import DashboardView from '../views/DashboardView.vue'
import CriarTarefaView from '../views/CriarTarefaView.vue'
import EditarTarefaView from '../views/EditarTarefaView.vue'
import DetalhesView from '../views/DetalhesView.vue'
const router = createRouter({
 history: createWebHistory(),
 routes: [
  { path: '/', name: 'login', component: LoginView },
  { path: '/cadastro', name: 'cadastro', component: CadastroView },
  { path: '/dashboard', name: 'dashboard', component: DashboardView },
  { path: '/tarefas/nova', name: 'criar-tarefa', component: CriarTarefaView },
  { path: '/tarefas/:id/editar', name: 'editar-tarefa', component: EditarTarefaView },
  { path: '/tarefas/:id', name: 'detalhes-tarefa', component: DetalhesView },
  { path: '/:pathMatch(.*)*', redirect: '/' }
 ]
})
export default router
