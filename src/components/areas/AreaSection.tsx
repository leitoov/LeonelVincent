import type { AreaWithExperiences } from '../../types/area'
import Icon from '../common/Icon'

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
      className="animate-fade space-y-10 pt-4 md:space-y-12"
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

      {/* Todas las experiencias del área visibles en timeline editorial */}
      <div className="space-y-4 md:space-y-6">
        <div className="flex flex-col justify-between gap-2 md:flex-row md:items-end md:gap-4">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-black/45 md:text-xs">
              Trayectoria aplicada ({area.experiences.length})
            </p>
            <h3 className="mt-1 text-xl font-semibold tracking-[-0.03em] text-[#111411] md:text-2xl md:tracking-[-0.035em]">
              Experiencia en {area.label}
            </h3>
          </div>
          <p className="text-xs text-black/55 md:text-sm">
            Todas las experiencias donde apliqué mi perfil de {area.label.toLowerCase()}.
          </p>
        </div>

        <div className="border-t border-black/15">
          {area.experiences.map((entry) => {
            const { experience, areaRole, focus, highlights, showEmbed } = entry
            return (
              <article
                key={`${area.id}-${experience.id}`}
                className="border-b border-black/15 py-8 md:py-12"
              >
                <div className="grid gap-6 md:grid-cols-[190px_1fr] md:gap-8 lg:grid-cols-[190px_0.85fr_1.15fr]">
                  <div className="min-w-0">
                    <div className="font-mono text-xs font-semibold uppercase tracking-wider text-black/55">
                      {experience.period}
                    </div>
                    {experience.location && (
                      <p className="mt-1.5 text-xs text-black/45">
                        {experience.location}
                      </p>
                    )}
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-xl font-semibold tracking-[-0.03em] text-[#111411] md:text-2xl md:tracking-[-0.035em]">
                      {areaRole ?? experience.role}
                    </h4>
                    <p className="mt-1.5 text-sm font-semibold text-black/75">
                      {experience.company}
                    </p>
                    {areaRole && (
                      <p className="mt-1 text-xs text-black/50">
                        {experience.role}
                      </p>
                    )}

                    {Boolean(experience.links?.length) && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {experience.links?.map((link) => (
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

                  <div className="min-w-0 space-y-4 md:space-y-5">
                    <p className="text-sm font-medium leading-relaxed text-[#111411] md:text-base">
                      {focus}
                    </p>

                    {experience.description && (
                      <p className="rounded-xl border border-black/10 bg-white/75 p-4 text-sm leading-relaxed text-black/65">
                        {experience.description}
                      </p>
                    )}

                    {Boolean(highlights.length) && (
                      <div className="space-y-2.5">
                        <h5 className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-black/50">
                          Logros en {area.label}
                        </h5>
                        <ul className="space-y-2">
                          {highlights.map((item) => (
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

                    <div className="grid gap-4 border-t border-black/10 pt-4 sm:grid-cols-2 md:gap-5 md:pt-5">
                      {Boolean(experience.technologies?.length) && (
                        <div className="min-w-0 space-y-2">
                          <h5 className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-black/50">
                            Tecnologías
                          </h5>
                          <div className="flex flex-wrap gap-1.5">
                            {experience.technologies?.map((tech, idx) => (
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

                      {Boolean(experience.skills?.length) && (
                        <div className="min-w-0 space-y-2">
                          <h5 className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-black/50">
                            Habilidades
                          </h5>
                          <div className="flex flex-wrap gap-1.5">
                            {experience.skills?.map((skill) => (
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

                {showEmbed && experience.embedUrl && (
                  <div className="mt-6 space-y-3 md:mt-8">
                    <h5 className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-black/50">
                      Vista previa interactiva (Figma)
                    </h5>
                    <div className="overflow-hidden rounded-2xl border border-black/15 bg-white shadow-sm">
                      <iframe
                        src={experience.embedUrl}
                        className="h-[360px] w-full border-0 md:h-[450px]"
                        allowFullScreen
                        loading="lazy"
                        title="Vista previa del proyecto"
                      />
                    </div>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
