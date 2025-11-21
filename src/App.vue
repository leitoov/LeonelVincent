<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppShell from './components/layout/AppShell.vue'
</script>

<template>
  <AppShell>
    <template #header-actions>
      <span class="text-xs text-slate-500">Construido con Vue 3 + Tailwind</span>
    </template>

    <RouterView />

    <template #footer-extra>
      <span class="text-xs text-slate-500">v1.0</span>
    </template>
  </AppShell>
</template>
