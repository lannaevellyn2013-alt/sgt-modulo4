<template>
 <aside class="sidebar">
  <h2>Sistema de Gerenciamento de Tarefas</h2>
  <nav class="navegacao" aria-label="Navegação principal"><ul>
   <li><RouterLink to="/dashboard">Dashboard</RouterLink></li>
   <li><RouterLink to="/dashboard">Minhas Tarefas</RouterLink></li>
   <li><RouterLink to="/tarefas/nova">Criar Tarefa</RouterLink></li>
   <li><a href="#" @click.prevent>Configurações</a></li>
   <li><RouterLink to="/" @click="$store.dispatch('user/logout')">Sair</RouterLink></li>
  </ul></nav><p class="sidebar-rodape">© 2026 Projeto Acadêmico</p>
 </aside>
</template>
