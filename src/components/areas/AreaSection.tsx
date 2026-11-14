import type { AreaWithExperiences } from '../../types/area'

interface AreaSectionProps {
  area: AreaWithExperiences
}

export default function AreaSection({ area }: AreaSectionProps) {
  return (
    <div
      role="tabpanel"
      id={`panel-${area.id}`}
      aria-labelledby={`tab-${area.id}`}
      key={area.id}
      className="animate-fade pt-4"
    >
      {/* Resumen del área */}
      <div className="grid gap-6 rounded-2xl border border-black/15 bg-white/80 p-5 md:gap-8 md:p-9 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="min-w-0 space-y-3 md:space-y-4">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-black/50 md:text-xs">
            {area.eyebrow}
          </p>
          <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#111411] md:text-3xl md:tracking-[-0.035em]">
            {area.title}
          </h3>
          <p className="text-sm leading-relaxed text-black/65 md:text-base">
            {area.description}
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1 md:gap-2 md:pt-2">
            {area.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-black/15 bg-[#f1f2ec] px-2.5 py-1 text-[11px] font-medium text-[#111411] md:px-3 md:text-xs"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="min-w-0 border-t border-black/10 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <h4 className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-black/50 md:mb-4 md:text-xs">
            Aporte clave en {area.label}
          </h4>
          <ul className="space-y-2.5 md:space-y-3">
            {area.pillars.map((pillar) => (
              <li
                key={pillar}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-black/75 md:gap-3"
              >
                <span
                  className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-[#0b0d0c]"
                  aria-hidden="true"
                />
                <span>{pillar}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
