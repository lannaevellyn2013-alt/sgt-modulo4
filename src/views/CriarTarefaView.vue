<template>
    <PrivateLayout>
        <header class="cabecalho-interno">
            <h1>Criar Tarefa</h1>
        </header>
        <section class="cartao cartao-formulario" aria-labelledby="titulo-criar">
            <h2 id="titulo-criar" class="titulo-cartao">Criar Tarefa</h2>
            <form @submit.prevent="salvar" novalidate>
                <div class="grupo-formulario"><label for="titulo">Título da Tarefa</label><input class="campo"
                        id="titulo" v-model.trim="titulo" required></div>
                <div class="grupo-formulario"><label for="descricao">Descrição (Opcional)</label><textarea class="campo"
                        id="descricao" v-model.trim="descricao"></textarea></div>
                <p v-if="erro" role="alert">{{ erro }}</p>
                <div class="acoes-formulario"><button class="botao botao-primario" type="submit">Salvar Tarefa</button>
                    <RouterLink class="botao botao-secundario" to="/dashboard">Cancelar</RouterLink>
                </div>
            </form>
        </section>
    </PrivateLayout>
</template>

<script>import PrivateLayout from '../components/layout/PrivateLayout.vue'; export default { components: { PrivateLayout }, data() { return { titulo: '', descricao: '', erro: '' } }, methods: { salvar() { this.erro = ''; if (!this.titulo) { this.erro = 'Informe o título da tarefa.'; return } this.$store.dispatch('tasks/addTask', { id: Date.now(), title: this.titulo, description: this.descricao, status: 'pendente', createdAt: new Date().toISOString().slice(0, 10) }); this.$router.push('/dashboard') } } }</script>
