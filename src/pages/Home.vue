<script setup lang="ts">
import { ref, computed } from 'vue'
import { useContent } from '../composables/useContent'
import { useExperience } from '../composables/useExperience'
import { useEducation } from '../composables/useEducation'

const { presentation } = useContent()
const { experiences } = useExperience()
const { categories, items: education, activeCategory, setCategory } = useEducation()

const experienceRef = ref<HTMLElement | null>(null)
const selectedExpId = ref<string>(experiences.value[0]?.id ?? '')
const selectedExperience = computed(() => {
  return experiences.value.find((exp) => exp.id === selectedExpId.value) ?? experiences.value[0]
})

const scrollToExperience = () => {
  experienceRef.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <section class="flex flex-col gap-10">
    <div class="relative flex flex-col gap-6 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-100 md:p-10 pb-14">
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
          @click="scrollToExperience"
          aria-label="Ver experiencia laboral"
        >
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true">
            <path d="M480-200 200-480l56-56 184 184v-568h80v568l184-184 56 56L480-200Z" />
          </svg>
        </button>
      </div>
    </div>

    <section ref="experienceRef" class="space-y-6">
      <div class="space-y-2">
        <p class="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 mt-6">Experiencia</p>
        <h2 class="text-2xl font-semibold tracking-tight text-slate-900">Experiencia laboral</h2>
        <p class="text-sm text-slate-600">Selecciona cada empresa o rol para explorar el detalle y logros en profundidad.</p>
      </div>

      <!-- Tabs de empresas / roles -->
      <div class="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
        <button
          v-for="exp in experiences"
          :key="exp.id"
          type="button"
          class="whitespace-nowrap rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all"
          :class="
            selectedExpId === exp.id
              ? 'border-slate-900 bg-slate-900 text-white shadow-sm'
              : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
          "
          @click="selectedExpId = exp.id"
        >
          <span class="block text-left font-medium">{{ exp.company }}</span>
          <span
            class="block text-xs font-normal opacity-80"
            :class="selectedExpId === exp.id ? 'text-slate-300' : 'text-slate-500'"
          >
            {{ exp.period }}
          </span>
        </button>
      </div>

      <!-- Detalle completo de la experiencia seleccionada -->
      <transition mode="out-in" name="fade">
        <article
          v-if="selectedExperience"
          :key="selectedExperience.id"
          class="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm ring-1 ring-slate-100"
        >
          <div class="flex flex-col gap-2 md:flex-row md:items-start md:justify-between border-b border-slate-100 pb-5">
            <div>
              <div class="flex flex-wrap items-center gap-2">
                <h3 class="text-2xl font-semibold text-slate-900">
                  {{ selectedExperience.role }}
                </h3>
                <span class="text-slate-400 font-light">@</span>
                <span class="text-xl font-medium text-slate-800">{{ selectedExperience.company }}</span>
              </div>
              <p v-if="selectedExperience.location" class="mt-1 text-sm text-slate-500">
                Modalidad: {{ selectedExperience.location }}
              </p>
            </div>
            <span class="inline-flex w-fit items-center rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-semibold text-slate-700">
              {{ selectedExperience.period }}
            </span>
          </div>

          <div v-if="selectedExperience.summary" class="text-base text-slate-700 leading-relaxed font-medium">
            {{ selectedExperience.summary }}
          </div>

          <div v-if="selectedExperience.description" class="rounded-xl bg-slate-50/70 p-4 border border-slate-100 text-sm leading-relaxed text-slate-600">
            {{ selectedExperience.description }}
          </div>

          <div v-if="selectedExperience.highlights?.length" class="space-y-3">
            <h4 class="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Logros y responsabilidades destacadas</h4>
            <ul class="space-y-2">
              <li
                v-for="item in selectedExperience.highlights"
                :key="item"
                class="flex items-start gap-2 text-sm text-slate-700"
              >
                <span class="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" aria-hidden="true" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <div class="grid gap-6 md:grid-cols-2 pt-2 border-t border-slate-100">
            <div v-if="selectedExperience.technologies?.length" class="space-y-2.5">
              <h4 class="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Tecnologías</h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in selectedExperience.technologies"
                  :key="tech"
                  class="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <div v-if="selectedExperience.skills?.length" class="space-y-2.5">
              <h4 class="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Habilidades</h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="skill in selectedExperience.skills"
                  :key="skill"
                  class="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>

          <div v-if="selectedExperience.links?.length" class="space-y-2.5 pt-2 border-t border-slate-100">
            <h4 class="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Enlaces y referencias</h4>
            <div class="flex flex-wrap gap-2.5">
              <a
                v-for="link in selectedExperience.links"
                :key="link.url"
                :href="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-white hover:text-slate-900"
              >
                <span>{{ link.label }}</span>
                <svg class="h-3.5 w-3.5 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          <div v-if="selectedExperience.embedUrl" class="space-y-2.5 pt-2 border-t border-slate-100">
            <h4 class="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Vista previa interactiva</h4>
            <div class="overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-slate-50">
              <iframe
                :src="selectedExperience.embedUrl"
                class="w-full h-[450px] border-0"
                allowfullscreen
                loading="lazy"
                title="Vista previa del proyecto"
              />
            </div>
          </div>
        </article>
      </transition>
    </section>

    <section class="space-y-6">
      <div class="space-y-2">
        <p class="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Formacion</p>
        <h2 class="text-2xl font-semibold tracking-tight text-slate-900">Estudios y certificaciones</h2>
        <p class="text-sm text-slate-600">Carreras, certificaciones y cursos relevantes.</p>
      </div>

      <div class="flex flex-wrap gap-2">
        <button
          v-for="cat in categories"
          :key="cat"
          type="button"
          class="rounded-full border px-3 py-1 text-sm font-semibold transition"
          :class="
            activeCategory === cat
              ? 'border-slate-900 bg-slate-900 text-white shadow-sm'
              : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
          "
          @click="setCategory(cat)"
        >
          {{ cat === 'all' ? 'Todo' : cat }}
        </button>
      </div>

      <div class="grid gap-4 md:grid-cols-2">
        <article
          v-for="edu in education"
          :key="edu.id"
          class="flex h-full flex-col gap-3 rounded-xl border border-slate-200 bg-white/90 p-5 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <div class="flex items-start justify-between gap-2">
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{{ edu.category }}</p>
              <h3 class="text-lg font-semibold text-slate-900">{{ edu.title }}</h3>
              <p class="text-sm font-semibold text-slate-700">{{ edu.institution }}</p>
            </div>
            <span class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
              {{ edu.year }}
            </span>
          </div>
          <p v-if="edu.details" class="text-sm text-slate-600">
            {{ edu.details }}
          </p>
          <div v-if="edu.skills?.length" class="flex flex-wrap gap-2">
            <span
              v-for="skill in edu.skills"
              :key="skill"
              class="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm"
            >
              {{ skill }}
            </span>
          </div>
        </article>
      </div>
    </section>
  </section>
</template>
