<template>
    <div class="pagina pagina-publica">
        <header class="cabecalho-publico">
            <p class="nome-sistema">Sistema de Gerenciamento de Tarefas</p>
        </header>
        <main class="conteudo-publico">
            <section class="cartao cartao-formulario" aria-labelledby="titulo-login">
                <h1 id="titulo-login" class="titulo-cartao">Bem-vindo de volta!</h1>
                <form @submit.prevent="entrar" novalidate>
                    <div class="grupo-formulario"><label for="email">Email</label><input class="campo" type="email"
                            id="email" v-model.trim="email" autocomplete="email" required></div>
                    <div class="grupo-formulario"><label for="senha">Senha</label><input class="campo" type="password"
                            id="senha" v-model="senha" autocomplete="current-password" required></div>
                    <p v-if="erro" role="alert">{{ erro }}</p>
                    <div class="acoes-formulario"><button class="botao botao-primario" type="submit">Entrar</button>
                    </div>
                    <p class="link-formulario">Não tem uma conta? <RouterLink to="/cadastro">Cadastre-se</RouterLink>
                    </p>
                </form>
            </section>
        </main>
        <footer class="rodape-publico">
            <p>© 2026 Projeto Acadêmico | <a href="#" @click.prevent>Termos de Uso</a></p>
        </footer>
    </div>
</template>

<script>
export default { data() { return { email: '', senha: '', erro: '' } }, methods: { entrar() { this.erro = ''; if (!this.email || !this.senha) { this.erro = 'Preencha email e senha.'; return } const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email); if (!emailValido) { this.erro = 'Informe um email válido.'; return } this.$store.dispatch('user/login', { name: this.email.split('@')[0], email: this.email }); this.$router.push('/dashboard') } } }
</script>
