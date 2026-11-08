<template>
    <div>
        <input type="checkbox" id="tema" class="controle-tema" v-model="dark">
        <label for="tema" class="botao-tema" aria-label="Alternar tema" title="Alternar tema"><span class="icone-claro"
                aria-hidden="true">☀️</span><span class="icone-escuro" aria-hidden="true">🌙</span></label>
        <router-view />
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const dark = ref(false)
watch(dark, value => document.body.classList.toggle('tema-escuro', value))
</script>
