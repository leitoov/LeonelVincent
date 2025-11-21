<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-900">
    <div class="mx-auto max-w-4xl px-6 py-12 md:py-16">
      <div class="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-xl ring-1 ring-slate-100 md:p-10">
        <div class="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Portfolio · Vue 3</p>
            <h1 class="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Leonel Vincent</h1>
            <p class="mt-2 text-base text-slate-600 md:text-lg">
              Soluciones innovadoras con foco en impacto, gestión de proyectos y desarrollo web.
            </p>
          </div>
          <button
            type="button"
            class="self-start rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
            @click="count++"
          >
            Clicks de prueba: {{ count }}
          </button>
        </div>

        <div class="grid gap-4 text-base leading-relaxed text-slate-700 md:text-lg">
          <p>
            Mi formación inicial es como Técnico en Programación y actualmente estudio Ingeniería en Sistemas para complementar la experiencia práctica con base teórica.
          </p>
          <p>
            Conocimientos en desarrollo web y mobile (Angular, Vue, React, Ionic) y backend con PHP (Laravel, Symfony, Yii). Manejo bases de datos MySQL y MongoDB para abordar proyectos de punta a punta.
          </p>
          <p>
            Certificaciones: Desarrollo Full Stack (UTN), gestión de proyectos y metodologías ágiles (LinkedIn Learning), UX/UI, UX Writing y neurociencia del feedback (Platzi).
          </p>
          <p>
            Me considero proactivo, responsable y con ganas de seguir aprendiendo y creciendo profesionalmente.
          </p>
          <p>
            Objetivo: aportar soluciones de calidad y seguir desarrollándome en entornos que valoren la innovación y el trabajo colaborativo.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
