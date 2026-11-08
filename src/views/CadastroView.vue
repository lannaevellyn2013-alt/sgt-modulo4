<template>
    <div class="pagina pagina-publica">
        <header class="cabecalho-publico">
            <p class="nome-sistema">Sistema de Gerenciamento de Tarefas</p>
        </header>
        <main class="conteudo-publico">
            <section class="cartao cartao-formulario" aria-labelledby="titulo-cadastro">
                <h1 id="titulo-cadastro" class="titulo-cartao">Crie sua Conta</h1>
                <form @submit.prevent="cadastrar" novalidate>
                    <div class="grupo-formulario"><label for="nome">Nome</label><input class="campo" id="nome"
                            v-model.trim="nome" autocomplete="name" required></div>
                    <div class="grupo-formulario"><label for="email">Email</label><input class="campo" type="email"
                            id="email" v-model.trim="email" autocomplete="email" required></div>
                    <div class="grupo-formulario"><label for="senha">Senha</label><input class="campo" type="password"
                            id="senha" v-model="senha" autocomplete="new-password" required></div>
                    <p v-if="erro" role="alert">{{ erro }}</p>
                    <div class="acoes-formulario"><button class="botao botao-primario" type="submit">Cadastrar</button>
                    </div>
                    <p class="link-formulario">Já tem uma conta? <RouterLink to="/">Faça login</RouterLink>
                    </p>
                </form>
            </section>
        </main>
        <footer class="rodape-publico">
            <p>© 2025 Projeto Acadêmico | <a href="#" @click.prevent>Termos de Uso</a></p>
        </footer>
    </div>
</template>

<script>
export default { data() { return { nome: '', email: '', senha: '', erro: '' } }, methods: { cadastrar() { this.erro = ''; if (!this.nome || !this.email || !this.senha) { this.erro = 'Preencha todos os campos.'; return } if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) { this.erro = 'Informe um email válido.'; return } this.$store.dispatch('user/login', { name: this.nome, email: this.email }); this.$router.push('/dashboard') } } }
</script>
