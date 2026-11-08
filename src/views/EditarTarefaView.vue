<template>
    <PrivateLayout>
        <header class="cabecalho-interno">
            <h1>Editar Tarefa</h1>
        </header>
        <section class="cartao cartao-formulario" aria-labelledby="titulo-editar">
            <h2 id="titulo-editar" class="titulo-cartao">Editar Tarefa</h2>
            <form @submit.prevent="atualizar" novalidate>
                <div class="grupo-formulario"><label for="titulo">Título da Tarefa</label><input class="campo"
                        id="titulo" v-model.trim="titulo" required></div>
                <div class="grupo-formulario"><label for="descricao">Descrição (Opcional)</label><textarea class="campo"
                        id="descricao" v-model.trim="descricao"></textarea></div>
                <div class="grupo-formulario"><label for="situacao">Situação da Tarefa</label><select class="campo"
                        id="situacao" v-model="status">
                        <option value="pendente">Pendente</option>
                        <option value="em-andamento">Em andamento</option>
                        <option value="concluida">Concluída</option>
                    </select></div>
                <p v-if="erro" role="alert">{{ erro }}</p>
                <div class="acoes-formulario"><button class="botao botao-primario" type="submit">Atualizar
                        Tarefa</button>
                    <RouterLink class="botao botao-secundario" to="/dashboard">Cancelar</RouterLink>
                </div>
            </form>
        </section>
    </PrivateLayout>
</template>

<script>
import PrivateLayout from '../components/layout/PrivateLayout.vue'; export default { components: { PrivateLayout }, data() { return { titulo: '', descricao: '', status: 'pendente', erro: '' } }, created() { const task = this.$store.getters['tasks/taskById'](this.$route.params.id); if (!task) { this.$router.replace('/dashboard'); return } this.titulo = task.title; this.descricao = task.description; this.status = task.status }, methods: { atualizar() { this.erro = ''; if (!this.titulo) { this.erro = 'Informe o título da tarefa.'; return } const old = this.$store.getters['tasks/taskById'](this.$route.params.id); if (!old) return; this.$store.dispatch('tasks/updateTask', { ...old, title: this.titulo, description: this.descricao, status: this.status }); this.$router.push({ name: 'detalhes-tarefa', params: { id: old.id } }) } } }</script>
