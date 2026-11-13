import { useEffect, useMemo, useState } from 'react'
import type { AreaWithExperiences } from '../../types/area'
import Icon from '../common/Icon'

interface AreaSectionProps {
  area: AreaWithExperiences
}

export default function AreaSection({ area }: AreaSectionProps) {
  const [selectedExpId, setSelectedExpId] = useState<string>(
    area.experiences[0]?.experience.id ?? ''
  )

  useEffect(() => {
    setSelectedExpId(area.experiences[0]?.experience.id ?? '')
  }, [area])

  const selectedEntry = useMemo(() => {
    return (
      area.experiences.find((item) => item.experience.id === selectedExpId) ??
      area.experiences[0]
    )
  }, [area, selectedExpId])

  return (
    <div
      role="tabpanel"
      id={`panel-${area.id}`}
      aria-labelledby={`tab-${area.id}`}
      key={area.id}
      className="animate-fade space-y-12 pt-4"
    >
      {/* Resumen del área */}
      <div className="grid gap-8 rounded-2xl border border-black/15 bg-white/80 p-6 md:p-9 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-black/50">
            {area.eyebrow}
          </p>
          <h3 className="text-2xl font-semibold tracking-[-0.035em] text-[#111411] md:text-3xl">
            {area.title}
          </h3>
          <p className="text-base leading-relaxed text-black/65">
            {area.description}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {area.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-black/15 bg-[#f1f2ec] px-3 py-1 text-xs font-medium text-[#111411]"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-black/10 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <h4 className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-black/50">
            Aporte clave en {area.label}
          </h4>
          <ul className="space-y-3">
            {area.pillars.map((pillar) => (
              <li
                key={pillar}
                className="flex items-start gap-3 text-sm leading-relaxed text-black/75"
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

      {/* Experiencia laboral dentro del área */}
      <div className="space-y-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-black/45">
              Trayectoria aplicada
            </p>
            <h3 className="mt-1 text-2xl font-semibold tracking-[-0.035em] text-[#111411]">
              Experiencia en {area.label}
            </h3>
          </div>
          <p className="text-sm text-black/55">
            Selecciona una empresa para ver el detalle de mi rol en {area.label.toLowerCase()}.
          </p>
        </div>

        {/* Sub-tabs de empresas */}
        <div className="flex gap-2.5 overflow-x-auto pb-2">
          {area.experiences.map(({ experience, areaRole }) => {
            const isSelected = selectedEntry?.experience.id === experience.id
            return (
              <button
                key={experience.id}
                type="button"
                onClick={() => setSelectedExpId(experience.id)}
                className={`whitespace-nowrap rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                  isSelected
                    ? 'border-[#0b0d0c] bg-[#0b0d0c] text-[#f2f3ee] shadow-md'
                    : 'border-black/15 bg-white/70 text-[#111411] hover:border-black/30 hover:bg-white'
                }`}
              >
                <span className="block font-semibold">{experience.company}</span>
                <span
                  className={`block font-mono text-[11px] ${
                    isSelected ? 'text-[#c8ff3d]' : 'text-black/50'
                  }`}
                >
                  {areaRole ?? experience.period}
                </span>
              </button>
            )
          })}
        </div>

        {/* Detalle editorial de la experiencia seleccionada */}
        {selectedEntry && (
          <article
            key={`${area.id}-${selectedEntry.experience.id}`}
            className="animate-fade border-t border-black/15 pt-8"
          >
            <div className="grid gap-8 border-b border-black/15 pb-10 md:grid-cols-[190px_1fr] lg:grid-cols-[190px_0.85fr_1.15fr]">
              <div>
                <div className="font-mono text-xs font-semibold uppercase tracking-wider text-black/55">
                  {selectedEntry.experience.period}
                </div>
                {selectedEntry.experience.location && (
                  <p className="mt-2 text-xs text-black/45">
                    Modalidad: {selectedEntry.experience.location}
                  </p>
                )}
              </div>

              <div>
                <h4 className="text-2xl font-semibold tracking-[-0.035em] text-[#111411]">
                  {selectedEntry.areaRole ?? selectedEntry.experience.role}
                </h4>
                <p className="mt-2 text-sm font-semibold text-black/70">
                  {selectedEntry.experience.company}
                </p>
                <p className="mt-1 text-xs text-black/50">
                  Rol general: {selectedEntry.experience.role}
                </p>

                {Boolean(selectedEntry.experience.links?.length) && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {selectedEntry.experience.links?.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-black/20 bg-white px-3.5 py-1.5 text-xs font-semibold text-[#111411] transition hover:border-[#0b0d0c] hover:bg-[#0b0d0c] hover:text-[#f2f3ee]"
                      >
                        <span>{link.label}</span>
                        <Icon name="external" className="size-3.5" />
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-5">
                <p className="text-base font-medium leading-relaxed text-[#111411]">
                  {selectedEntry.focus}
                </p>

                {selectedEntry.experience.description && (
                  <p className="rounded-xl border border-black/10 bg-white/75 p-4 text-sm leading-relaxed text-black/65">
                    {selectedEntry.experience.description}
                  </p>
                )}

                {Boolean(selectedEntry.highlights.length) && (
                  <div className="space-y-2.5">
                    <h5 className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-black/50">
                      Logros en {area.label}
                    </h5>
                    <ul className="space-y-2">
                      {selectedEntry.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-black/75"
                        >
                          <span
                            className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-[#0b0d0c]"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="grid gap-5 border-t border-black/10 pt-5 sm:grid-cols-2">
                  {Boolean(selectedEntry.experience.technologies?.length) && (
                    <div className="space-y-2">
                      <h5 className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-black/50">
                        Tecnologías
                      </h5>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedEntry.experience.technologies?.map((tech, idx) => (
                          <span
                            key={`${tech}-${idx}`}
                            className="rounded-full border border-black/15 bg-white px-2.5 py-1 text-xs font-medium text-[#111411]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {Boolean(selectedEntry.experience.skills?.length) && (
                    <div className="space-y-2">
                      <h5 className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-black/50">
                        Habilidades
                      </h5>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedEntry.experience.skills?.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-black/10 bg-black/[0.05] px-2.5 py-1 text-xs font-medium text-black/75"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {selectedEntry.showEmbed && selectedEntry.experience.embedUrl && (
              <div className="mt-8 space-y-3">
                <h5 className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-black/50">
                  Vista previa interactiva (Figma)
                </h5>
                <div className="overflow-hidden rounded-2xl border border-black/15 bg-white shadow-sm">
                  <iframe
                    src={selectedEntry.experience.embedUrl}
                    className="h-[450px] w-full border-0"
                    allowFullScreen
                    loading="lazy"
                    title="Vista previa del proyecto"
                  />
                </div>
              </div>
            )}
          </article>
        )}
      </div>
    </div>
  )
}
