<script setup lang="ts">
import { ref } from 'vue'
import { useContent } from '../composables/useContent'
import { useExperience } from '../composables/useExperience'

const { presentation } = useContent()
const { experiences } = useExperience()

const timelineRef = ref<HTMLElement | null>(null)
const expandedId = ref<string | null>(null)

const scrollToTimeline = () => {
  timelineRef.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const toggle = (id: string) => {
  expandedId.value = expandedId.value === id ? null : id
}
</script>

<template>
  <section class="flex flex-col gap-10">
    <div class="relative flex flex-col gap-6 rounded-2xl bg-white p-8 shadow-xl ring-1 ring-slate-100 md:p-10 pb-14">
      <div class="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
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

      <div class="absolute left-1/2 -bottom-7 -translate-x-1/2">
        <button
          type="button"
          class="grid h-14 w-14 place-items-center rounded-full bg-white text-slate-900 shadow-[0_10px_30px_rgba(15,23,42,0.18)] ring-2 ring-white/70 transition hover:shadow-[0_16px_40px_rgba(15,23,42,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 animate-floating"
          @click="scrollToTimeline"
          aria-label="Ver experiencia laboral"
        >
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true">
            <path d="M480-200 200-480l56-56 184 184v-568h80v568l184-184 56 56L480-200Z" />
          </svg>
        </button>
      </div>
    </div>

    <section ref="timelineRef" class="space-y-6">
      <div class="space-y-2">
        <p class="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 mt-6">Experiencia</p>
        <h2 class="text-2xl font-semibold tracking-tight text-slate-900">Línea de tiempo</h2>
        <p class="text-sm text-slate-600">Recorrido de roles y proyectos, de lo más reciente a lo anterior.</p>
      </div>

      <div class="relative">
        <div class="absolute left-[14px] top-0 h-full w-px bg-slate-200 md:left-1/2 md:-translate-x-1/2" />
        <div class="space-y-8">
          <article
            v-for="(exp, index) in experiences"
            :key="`${exp.role}-${exp.company}`"
            :class="[
              'relative flex flex-col gap-3 rounded-xl border border-slate-200 bg-white/90 p-5 shadow-sm ring-1 ring-slate-100 md:w-[48%] fade-up transition hover:-translate-y-0.5 hover:shadow-md cursor-pointer',
              index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto',
            ]"
            :style="{ animationDelay: `${index * 120}ms` }"
            @click="toggle(exp.id)"
          >
            <div
              :class="[
                'absolute top-6 h-4 w-4 rounded-full border-4 border-white bg-slate-900 shadow',
                index % 2 === 0 ? 'left-[6px] md:left-auto md:right-[-12px]' : 'left-[6px] md:right-auto md:left-[-12px]',
              ]"
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
            <transition name="fade">
              <div v-if="expandedId === exp.id" class="mt-3 space-y-3 rounded-lg border border-slate-200 bg-slate-50/80 p-4">
                <p v-if="exp.description" class="text-sm text-slate-700">
                  {{ exp.description }}
                </p>
                <div v-if="exp.technologies?.length" class="space-y-2">
                  <p class="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Tecnologías</p>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tech in exp.technologies"
                      :key="tech"
                      class="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
                <div v-if="exp.skills?.length" class="space-y-2">
                  <p class="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Habilidades</p>
                  <ul class="space-y-1 text-sm text-slate-700">
                    <li v-for="skill in exp.skills" :key="skill" class="flex gap-2">
                      <span class="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-slate-400" aria-hidden="true" />
                      <span>{{ skill }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </transition>
          </article>
        </div>
      </div>
    </section>
  </section>
</template>
