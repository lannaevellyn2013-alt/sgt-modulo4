<template>
    <PrivateLayout>
        <header class="cabecalho-interno">
            <h1>Minhas Tarefas</h1>
            <RouterLink class="botao botao-primario" to="/tarefas/nova">Nova Tarefa</RouterLink>
        </header>
        <section aria-labelledby="titulo-listagem">
            <h2 id="titulo-listagem" class="visualmente-oculto">Lista de tarefas</h2>
            <div class="grade-tarefas">
                <TaskCard v-for="task in tasks" :key="task.id" :task="task" />
            </div>
            <p v-if="!tasks.length">Nenhuma tarefa cadastrada.</p>
        </section>
    </PrivateLayout>
</template>

<script>import { mapGetters } from 'vuex'; import PrivateLayout from '../components/layout/PrivateLayout.vue'; import TaskCard from '../components/tasks/TaskCard.vue'; export default { components: { PrivateLayout, TaskCard }, computed: { ...mapGetters('tasks', ['allTasks']), tasks() { return this.allTasks } } }</script>
