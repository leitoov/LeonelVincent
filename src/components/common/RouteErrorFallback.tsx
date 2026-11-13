import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

export default function RouteErrorFallback() {
  const error = useRouteError()
  const message = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : error instanceof Error
      ? error.message
      : 'Ocurrió un error inesperado.'

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6 py-24">
      <div className="max-w-lg rounded-2xl border border-white/10 bg-[#101310] p-8 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#c8ff3d]">
          Error de navegación
        </p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-[#f2f3ee]">
          No pudimos mostrar esta vista
        </h1>
        <p className="mt-3 text-sm text-white/60">{message}</p>
        <a
          href="#/"
          className="mt-6 inline-flex items-center rounded-full bg-[#c8ff3d] px-5 py-2.5 text-xs font-bold text-[#0b0d0c] transition hover:bg-[#d5ff6d]"
        >
          Volver al inicio
        </a>
      </div>
    </div>
  )
}

