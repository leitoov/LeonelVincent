<script setup lang="ts">
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-900">
    <AppHeader>
      <template #actions>
        <slot name="header-actions" />
      </template>
    </AppHeader>

    <main class="mx-auto max-w-5xl px-6 py-12 md:py-16">
      <div class="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl ring-1 ring-slate-100 md:p-10">
        <slot />
      </div>
    </main>

    <AppFooter>
      <template #extra>
        <slot name="footer-extra" />
      </template>
    </AppFooter>
  </div>
</template>
