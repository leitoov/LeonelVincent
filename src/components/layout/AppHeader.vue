<template>
  <header class="w-full border-b border-slate-200 bg-white/80 backdrop-blur">
    <div class="flex w-full items-center justify-between px-6 py-4">
      <div class="flex items-center gap-2">
        <div class="grid h-9 w-9 place-items-center rounded-xl bg-slate-900 text-sm font-bold text-white">LV</div>
        <div>
          <p class="text-sm font-semibold text-slate-900">Leonel Vincent</p>
          <p class="text-xs text-slate-500">Portfolio · Vue 3</p>
        </div>
      </div>
      <div class="flex items-center gap-3 text-sm text-slate-600">
        <slot name="actions" />
      </div>
    </div>
  </header>
</template>
