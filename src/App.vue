<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="page">
    <header class="logo-row">
      <a href="https://vite.dev" target="_blank" rel="noreferrer">
        <img src="/vite.svg" class="logo" alt="Vite logo" title="Vite" />
      </a>
      <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" title="Vue 3" />
      </a>
    </header>

    <main class="panel">
      <p class="eyebrow">Tu portfolio en Vue 3</p>
      <h1>Base lista para empezar</h1>
      <p class="lead">
        Desde aquí vas a montar el recorrido de tu CV en timeline y un panel de ideas/notas.
      </p>

      <div class="card">
        <button type="button" class="cta" @click="count++">
          Clicks de prueba: {{ count }}
        </button>
        <p class="muted">
          El contador simplemente asegura que el hot-reload está funcionando.
        </p>
      </div>
    </main>
  </div>
</template>
