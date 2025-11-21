<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-900">
    <header class="border-b border-slate-200 bg-white/70 backdrop-blur">
      <div class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div class="flex items-center gap-2">
          <div class="h-9 w-9 rounded-xl bg-slate-900 text-white grid place-items-center font-bold">LV</div>
          <div>
            <p class="text-sm font-semibold">Leonel Vincent</p>
            <p class="text-xs text-slate-500">Portfolio · Vue 3</p>
          </div>
        </div>
      </div>
    </header>

    <main class="mx-auto max-w-5xl px-6 py-12 md:py-16">
      <div class="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl ring-1 ring-slate-100 md:p-10">
        <RouterView />
      </div>
    </main>

    <footer class="border-t border-slate-200 bg-white/70 backdrop-blur">
      <div class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 text-sm text-slate-600">
        <span>© {{ new Date().getFullYear() }} Leonel Vincent</span>
        <span class="text-slate-500">Construido con Vue 3 + Tailwind</span>
      </div>
    </footer>
  </div>
</template>
