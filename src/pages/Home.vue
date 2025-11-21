<script setup lang="ts">
import { useContent } from '../composables/useContent'

const { presentation } = useContent()
</script>

<template>
  <section class="flex flex-col gap-6">
    <div class="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Portfolio · Vue 3</p>
        <h1 class="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          {{ presentation.title }}
        </h1>
        <p class="mt-2 text-base text-slate-600 md:text-lg">
          {{ presentation.tagline }}
        </p>
      </div>
    </div>

    <div class="grid gap-4 text-base leading-relaxed text-slate-700 md:text-lg">
      <p v-for="paragraph in presentation.intro" :key="paragraph.substring(0, 24)">
        {{ paragraph }}
      </p>
    </div>
  </section>
</template>
