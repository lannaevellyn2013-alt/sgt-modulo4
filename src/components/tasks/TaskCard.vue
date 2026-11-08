<template><article class="cartao cartao-tarefa">
 <header class="cabecalho-tarefa"><RouterLink class="icone-olho" :to="{name:'detalhes-tarefa',params:{id:task.id}}" aria-label="Ver detalhes" title="Ver detalhes">👁</RouterLink><h2>{{task.title}}</h2></header>
 <p class="descricao-tarefa">{{task.description || 'Sem descrição.'}}</p><p><span class="status">{{labelStatus}}</span></p>
 <div class="acoes-tarefa"><RouterLink class="botao botao-secundario" :to="{name:'editar-tarefa',params:{id:task.id}}">Editar</RouterLink><button class="botao botao-primario" type="button" @click="$store.dispatch('tasks/completeTask',task.id)" :disabled="task.status==='concluida'">{{task.status==='concluida'?'Concluída':'Concluir'}}</button></div>
 </article></template>
<script setup>import {computed} from 'vue'; const props=defineProps({task:{type:Object,required:true}}); const labelStatus=computed(()=>({'pendente':'Pendente','em-andamento':'Em andamento','concluida':'Concluída'}[props.task.status]||props.task.status))</script>
