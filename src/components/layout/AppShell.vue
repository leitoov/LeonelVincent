<script setup lang="ts">
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col bg-slate-50 text-slate-900">
    <AppHeader>
      <template #actions>
        <slot name="header-actions" />
      </template>
    </AppHeader>

    <main class="flex-1 w-full">
      <div class="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div class="p-8 md:p-10">
          <slot />
        </div>
      </div>
    </main>

    <AppFooter>
      <template #extra>
        <slot name="footer-extra" />
      </template>
    </AppFooter>
  </div>
</template>
