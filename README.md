# Portafolio de Leonel Vincent

Proyecto en Vue 3 + Vite + Tailwind para mostrar presentación, experiencia  y formación.

## Requisitos
- Node.js 18+ (tienes 22.x) y npm.

## Scripts
- `npm install` — instala dependencias.
- `npm run dev` — entorno local con hot reload.
- `npm run build` — compila a producción en `dist/`.
- `npm run preview` — sirve el build para revisar.

## Estructura breve
- `src/pages/Home.vue`: presentación, línea de tiempo y formación.
- `src/constants/`: datos en JSON (`presentation`, `experience`, `education`).
- `src/composables/`: hooks para consumir datos (`useContent`, `useExperience`, `useEducation`).
- `src/components/layout/`: header, footer y `AppShell`.
- `src/router/`: rutas (Home).

## Datos
Edita los JSON en `src/constants/` para actualizar texto, experiencia o formación. Los componentes ya leen de esos archivos a través de servicios/composables.
