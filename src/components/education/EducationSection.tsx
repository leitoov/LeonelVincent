import { useEducation } from '../../hooks/useEducation'
import Icon from '../common/Icon'

export default function EducationSection() {
  const { categories, items: education, activeCategory, setCategory } = useEducation()

  return (
    <section id="formacion" className="section-wrap">
      <div className="section-label">
        <span>03</span> Formación continua
      </div>

      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <h2 className="section-title">
          Estudios y
          <br />
          <span className="text-white/30">certificaciones.</span>
        </h2>
        <p className="max-w-md text-white/50">
          Carreras, certificaciones y cursos orientados a arquitectura, producto, IA y liderazgo.
        </p>
      </div>

      <div className="mb-10 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`rounded-full border px-4 py-1.5 text-xs font-semibold capitalize transition ${
              activeCategory === cat
                ? 'border-[#c8ff3d] bg-[#c8ff3d] text-[#0b0d0c]'
                : 'border-white/15 bg-white/[0.03] text-white/70 hover:border-white/30 hover:text-white'
            }`}
            onClick={() => setCategory(cat)}
          >
            {cat === 'all' ? 'Todo' : cat}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 md:gap-5">
        {education.map((edu) => (
          <article
            key={edu.id}
            className="flex h-full min-w-0 flex-col justify-between gap-3 rounded-2xl border border-white/10 bg-[#101310] p-4 transition-colors hover:border-white/20 hover:bg-[#151a14] md:gap-4 md:p-6"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#c8ff3d]">
                    {edu.category}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold tracking-[-0.02em] text-[#f2f3ee]">
                    {edu.link ? (
                      <a
                        href={edu.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 transition hover:text-[#c8ff3d]"
                      >
                        <span>{edu.title}</span>
                        <Icon name="external" className="size-4 text-white/45" />
                      </a>
                    ) : (
                      <span>{edu.title}</span>
                    )}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-white/60">
                    {edu.institution}
                  </p>
                </div>

                <span className="shrink-0 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 font-mono text-xs text-white/75">
                  {edu.year}
                </span>
              </div>

              {edu.details && (
                <p className="text-sm leading-relaxed text-white/55">
                  {edu.details}
                </p>
              )}
            </div>

            {Boolean(edu.skills?.length) && (
              <div className="flex flex-wrap gap-2 border-t border-white/10 pt-4">
                {edu.skills?.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
