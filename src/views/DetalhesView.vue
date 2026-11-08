<template>
    <PrivateLayout>
        <header class="cabecalho-interno">
            <h1>Detalhes da Tarefa</h1>
            <RouterLink class="botao botao-secundario" to="/dashboard">Voltar para a Lista</RouterLink>
        </header>
        <article v-if="task" class="cartao cartao-detalhes">
            <h2>{{ task.title }}</h2>
            <dl class="lista-detalhes">
                <dt>Status:</dt>
                <dd><span class="status">{{ statusLabel }}</span></dd>
                <dt>Criada em:</dt>
                <dd>{{ dateLabel }}</dd>
            </dl>
            <section class="descricao-detalhada" aria-labelledby="titulo-descricao">
                <h2 id="titulo-descricao">Descrição</h2>
                <p>{{ task.description || 'Sem descrição.' }}</p>
            </section>
            <div class="acoes-formulario">
                <RouterLink class="botao botao-primario" :to="{ name: 'editar-tarefa', params: { id: task.id } }">Editar Tarefa
                </RouterLink><button class="botao botao-perigo" type="button" @click="excluir">Excluir Tarefa</button>
            </div>
        </article>
    </PrivateLayout>
</template>

<script>
import PrivateLayout from '../components/layout/PrivateLayout.vue'; export default { components: { PrivateLayout }, computed: { task() { return this.$store.getters['tasks/taskById'](this.$route.params.id) }, statusLabel() { return ({ pendente: 'Pendente', 'em-andamento': 'Em andamento', concluida: 'Concluída' })[this.task?.status] || '' }, dateLabel() { if (!this.task?.createdAt) return ''; return new Date(this.task.createdAt + 'T12:00:00').toLocaleDateString('pt-BR') } }, methods: { excluir() { if (confirm('Deseja realmente excluir esta tarefa?')) { this.$store.dispatch('tasks/deleteTask', this.task.id); this.$router.push('/dashboard') } } }, watch: { task(value) { if (!value) this.$router.replace('/dashboard') } }, created() { if (!this.task) this.$router.replace('/dashboard') } }</script>
