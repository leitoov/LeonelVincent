<template>
  <footer class="w-full border-t border-slate-200 bg-white/80 backdrop-blur">
    <div class="flex w-full flex-col gap-1 px-6 py-4 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
      <span>© {{ new Date().getFullYear() }} Leonel Vincent</span>
      <div class="flex items-center gap-3 text-xs text-slate-500">
        <span>Desarrollador | Coordinador IT</span>
        <slot name="extra" />
      </div>
    </div>
  </footer>
</template>
