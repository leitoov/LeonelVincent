import { useMemo, useRef, useState } from 'react'
import { useContent } from '../hooks/useContent'
import { useExperience } from '../hooks/useExperience'
import { useEducation } from '../hooks/useEducation'

export default function Home() {
  const { presentation } = useContent()
  const { experiences } = useExperience()
  const { categories, items: education, activeCategory, setCategory } = useEducation()

  const experienceRef = useRef<HTMLElement | null>(null)
  const [selectedExpId, setSelectedExpId] = useState<string>(experiences[0]?.id ?? '')

  const selectedExperience = useMemo(() => {
    return experiences.find((exp) => exp.id === selectedExpId) ?? experiences[0]
  }, [experiences, selectedExpId])

  const scrollToExperience = () => {
    experienceRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="flex flex-col gap-10">
      <div className="relative flex flex-col gap-6 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-100 md:p-10 pb-14">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              {presentation.title}
            </h1>
            <p className="mt-2 text-base text-slate-600 md:text-lg">
              {presentation.tagline}
            </p>
          </div>
        </div>

        <div className="grid gap-4 text-base leading-relaxed text-slate-700 md:text-lg">
          {presentation.intro.map((paragraph) => (
            <p key={paragraph.substring(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <div className="absolute left-1/2 -bottom-7 -translate-x-1/2">
          <button
            type="button"
            className="grid h-14 w-14 place-items-center rounded-full bg-white text-slate-900 shadow-[0_10px_30px_rgba(15,23,42,0.18)] ring-2 ring-white/70 transition hover:shadow-[0_16px_40px_rgba(15,23,42,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 animate-floating"
            onClick={scrollToExperience}
            aria-label="Ver experiencia laboral"
          >
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" aria-hidden="true">
              <path d="M480-200 200-480l56-56 184 184v-568h80v568l184-184 56 56L480-200Z" />
            </svg>
          </button>
        </div>
      </div>

      <section ref={experienceRef} className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 mt-6">Experiencia</p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Experiencia laboral</h2>
          <p className="text-sm text-slate-600">Selecciona cada empresa o rol para explorar el detalle y logros en profundidad.</p>
        </div>

        {/* Tabs de empresas / roles */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {experiences.map((exp) => (
            <button
              key={exp.id}
              type="button"
              className={`whitespace-nowrap rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all ${
                selectedExpId === exp.id
                  ? 'border-slate-900 bg-slate-900 text-white shadow-sm'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
              }`}
              onClick={() => setSelectedExpId(exp.id)}
            >
              <span className="block text-left font-medium">{exp.company}</span>
              <span
                className={`block text-xs font-normal opacity-80 ${
                  selectedExpId === exp.id ? 'text-slate-300' : 'text-slate-500'
                }`}
              >
                {exp.period}
              </span>
            </button>
          ))}
        </div>

        {/* Detalle completo de la experiencia seleccionada */}
        {selectedExperience && (
          <article
            key={selectedExperience.id}
            className="animate-fade flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm ring-1 ring-slate-100"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between border-b border-slate-100 pb-5">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-2xl font-semibold text-slate-900">
                    {selectedExperience.role}
                  </h3>
                  <span className="text-slate-400 font-light">@</span>
                  <span className="text-xl font-medium text-slate-800">{selectedExperience.company}</span>
                </div>
                {selectedExperience.location && (
                  <p className="mt-1 text-sm text-slate-500">
                    Modalidad: {selectedExperience.location}
                  </p>
                )}
              </div>
              <span className="inline-flex w-fit items-center rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-semibold text-slate-700">
                {selectedExperience.period}
              </span>
            </div>

            {selectedExperience.summary && (
              <div className="text-base text-slate-700 leading-relaxed font-medium">
                {selectedExperience.summary}
              </div>
            )}

            {selectedExperience.description && (
              <div className="rounded-xl bg-slate-50/70 p-4 border border-slate-100 text-sm leading-relaxed text-slate-600">
                {selectedExperience.description}
              </div>
            )}

            {Boolean(selectedExperience.highlights?.length) && (
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Logros y responsabilidades destacadas</h4>
                <ul className="space-y-2">
                  {selectedExperience.highlights?.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="grid gap-6 md:grid-cols-2 pt-2 border-t border-slate-100">
              {Boolean(selectedExperience.technologies?.length) && (
                <div className="space-y-2.5">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Tecnologías</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExperience.technologies?.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {Boolean(selectedExperience.skills?.length) && (
                <div className="space-y-2.5">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Habilidades</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExperience.skills?.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {Boolean(selectedExperience.links?.length) && (
              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Enlaces y referencias</h4>
                <div className="flex flex-wrap gap-2.5">
                  {selectedExperience.links?.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-white hover:text-slate-900"
                    >
                      <span>{link.label}</span>
                      <svg className="h-3.5 w-3.5 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {selectedExperience.embedUrl && (
              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Vista previa interactiva</h4>
                <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-slate-50">
                  <iframe
                    src={selectedExperience.embedUrl}
                    className="w-full h-[450px] border-0"
                    allowFullScreen
                    loading="lazy"
                    title="Vista previa del proyecto"
                  />
                </div>
              </div>
            )}
          </article>
        )}
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Formacion</p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Estudios y certificaciones</h2>
          <p className="text-sm text-slate-600">Carreras, certificaciones y cursos relevantes.</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`rounded-full border px-3 py-1 text-sm font-semibold transition ${
                activeCategory === cat
                  ? 'border-slate-900 bg-slate-900 text-white shadow-sm'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
              }`}
              onClick={() => setCategory(cat)}
            >
              {cat === 'all' ? 'Todo' : cat}
            </button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {education.map((edu) => (
            <article
              key={edu.id}
              className="flex h-full flex-col gap-3 rounded-xl border border-slate-200 bg-white/90 p-5 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{edu.category}</p>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {edu.link ? (
                      <a
                        href={edu.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 hover:text-blue-600 transition underline-offset-2 hover:underline"
                      >
                        <span>{edu.title}</span>
                        <svg className="h-4 w-4 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <span>{edu.title}</span>
                    )}
                  </h3>
                  <p className="text-sm font-semibold text-slate-700">{edu.institution}</p>
                </div>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                  {edu.year}
                </span>
              </div>
              {edu.details && (
                <p className="text-sm text-slate-600">
                  {edu.details}
                </p>
              )}
              {Boolean(edu.skills?.length) && (
                <div className="flex flex-wrap gap-2">
                  {edu.skills?.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}

