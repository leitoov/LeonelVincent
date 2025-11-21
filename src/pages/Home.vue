<script setup lang="ts">
import { ref } from 'vue'
import { useContent } from '../composables/useContent'
import { useExperience } from '../composables/useExperience'

const { presentation } = useContent()
const { experiences } = useExperience()

const timelineRef = ref<HTMLElement | null>(null)

const scrollToTimeline = () => {
  timelineRef.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <section class="flex flex-col gap-10">
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

      <div class="flex justify-center pt-2">
        <button
          type="button"
          class="grid h-14 w-14 place-items-center rounded-full bg-white text-slate-900 shadow-xl shadow-slate-500/20 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
          @click="scrollToTimeline"
          aria-label="Ver experiencia laboral"
        >
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true">
            <path d="M380-280v-400l320 200-320 200Z" />
          </svg>
        </button>
      </div>
    </div>

    <section ref="timelineRef" class="space-y-6">
      <div class="space-y-2">
        <p class="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Experiencia</p>
        <h2 class="text-2xl font-semibold tracking-tight text-slate-900">Línea de tiempo</h2>
        <p class="text-sm text-slate-600">Recorrido de roles y proyectos, de lo más reciente a lo anterior.</p>
      </div>

      <div class="relative">
        <div class="absolute left-[14px] top-0 h-full w-px bg-slate-200 md:left-1/2 md:-translate-x-1/2" />
        <div class="space-y-8">
          <article
            v-for="(exp, index) in experiences"
            :key="`${exp.role}-${exp.company}`"
            class="relative flex flex-col gap-3 rounded-xl border border-slate-200 bg-white/90 p-5 shadow-sm ring-1 ring-slate-100 md:w-[48%] md:odd:ml-auto md:even:mr-auto fade-up"
            :style="{ animationDelay: `${index * 120}ms` }"
          >
            <div
              class="absolute left-[6px] top-6 h-4 w-4 rounded-full border-4 border-white bg-slate-900 shadow md:left-auto md:right-[-10px] md:odd:right-auto md:odd:left-[-10px]"
              aria-hidden="true"
            />
            <p class="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{{ exp.period }}</p>
            <h3 class="text-xl font-semibold text-slate-900">
              {{ exp.role }}
            </h3>
            <p class="text-sm font-semibold text-slate-700">{{ exp.company }} <span v-if="exp.location" class="text-slate-500">· {{ exp.location }}</span></p>
            <p class="text-sm text-slate-600">
              {{ exp.summary }}
            </p>
            <ul v-if="exp.highlights?.length" class="mt-1 space-y-1 text-sm text-slate-600">
              <li v-for="item in exp.highlights" :key="item" class="flex gap-2">
                <span class="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-slate-400" aria-hidden="true" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  </section>
</template>
