<script setup lang="ts">
import { useContent } from './composables/useContent'

const { presentation } = useContent()
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-900">
    <div class="mx-auto max-w-4xl px-6 py-12 md:py-16">
      <div class="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-xl ring-1 ring-slate-100 md:p-10">
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
      </div>
    </div>
  </div>
</template>
