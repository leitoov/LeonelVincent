import { useRef } from 'react'
import { useContent } from '../hooks/useContent'
import { useAreas } from '../hooks/useAreas'
import type { AreaId } from '../types/area'
import Icon, { type IconName } from '../components/common/Icon'
import AreaTabs from '../components/areas/AreaTabs'
import AreaSection from '../components/areas/AreaSection'
import EducationSection from '../components/education/EducationSection'
import { scrollToSection } from '../utils/scroll'

const AREA_CARD_ICONS: Record<AreaId, IconName> = {
  producto: 'spark',
  gestion: 'team',
  desarrollo: 'layers',
}

export default function Home() {
  const { presentation } = useContent()
  const { areas, activeAreaId, activeArea, setActiveAreaId } = useAreas()
  const areasRef = useRef<HTMLElement | null>(null)

  const handleSelectAreaAndScroll = (areaId: AreaId) => {
    setActiveAreaId(areaId)
    areasRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      {/* Hero */}
      <section
        id="inicio"
        className="relative flex items-end border-b border-white/10 px-5 pb-12 pt-28 md:min-h-[90vh] md:px-6 md:pb-24 md:pt-36 lg:px-10"
      >
        <div className="pointer-events-none absolute right-[-6rem] top-24 size-[24rem] rounded-full bg-[#c8ff3d]/[0.08] blur-[120px] md:size-[34rem] md:blur-[130px]" />
        <div className="mx-auto grid w-full max-w-[1400px] items-end gap-8 md:gap-12 lg:grid-cols-[1fr_340px]">
          <div className="min-w-0">
            <div className="mb-5 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c8ff3d] md:mb-8 md:gap-3 md:text-xs md:tracking-[0.2em]">
              <span className="size-2 shrink-0 rounded-full bg-[#c8ff3d] shadow-[0_0_16px_#c8ff3d]" />
              <span className="truncate">{presentation.title} · Disponible para nuevos retos</span>
            </div>
            <p className="mb-3 text-sm text-white/55 md:mb-4 md:text-xl md:text-white/50">
              {presentation.tagline}
            </p>
            <h1 className="max-w-[1100px] text-[clamp(2.75rem,11vw,8.5rem)] font-semibold leading-[0.9] tracking-[-0.06em] md:leading-[0.88] md:tracking-[-0.075em]">
              Construyo sistemas.
              <br />
              <span className="text-white/[0.28]">Impulso equipos.</span>
            </h1>
          </div>

          <div className="min-w-0 border-t border-white/15 pt-5 lg:mb-2 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
            <p className="text-sm leading-relaxed text-white/65 md:text-lg">
              {presentation.intro[0]}
            </p>
            <a
              href="#areas"
              onClick={scrollToSection('areas')}
              className="mt-5 inline-flex items-center gap-3 text-sm font-semibold text-[#c8ff3d] transition-transform hover:translate-x-0.5 md:mt-7"
            >
              Explorar por área <Icon name="arrow" className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 01 Perfil y áreas de impacto */}
      <section id="perfil" className="section-wrap">
        <div className="section-label">
          <span>01</span> Lo que aporto
        </div>

        <div className="grid gap-8 md:gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <h2 className="section-title">
            Tecnología al servicio
            <br />
            de las personas.
          </h2>
          <div className="min-w-0">
            <div className="space-y-3 text-base leading-relaxed tracking-[-0.015em] text-white/75 md:space-y-4 md:text-2xl md:tracking-[-0.02em]">
              {presentation.intro.slice(1).map((paragraph) => (
                <p key={paragraph.substring(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-3 border-y border-white/10 md:mt-14">
              {[
                ['8+', 'años creando software'],
                ['3 áreas', 'Producto, Gestión y Dev'],
                ['IA-First', 'integrada al día a día'],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="border-l border-white/10 px-3 py-5 first:border-l-0 first:pl-0 md:px-7 md:py-7"
                >
                  <strong className="block text-xl font-semibold tracking-[-0.04em] text-[#c8ff3d] sm:text-3xl md:text-4xl md:tracking-[-0.05em]">
                    {value}
                  </strong>
                  <span className="mt-1.5 block text-[11px] leading-snug text-white/45 md:mt-2 md:text-sm">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resumen rápido de las 3 áreas que navega directo al tab correspondiente */}
        <div className="mt-12 grid gap-3 md:mt-24 md:gap-px md:overflow-hidden md:rounded-2xl md:border md:border-white/10 md:bg-white/10 lg:grid-cols-3">
          {areas.map((area, index) => (
            <button
              key={area.id}
              type="button"
              onClick={() => handleSelectAreaAndScroll(area.id)}
              className="group min-w-0 rounded-2xl border border-white/10 bg-[#101310] p-5 text-left transition-colors hover:bg-[#151a14] md:rounded-none md:border-0 md:p-9"
            >
              <div className="mb-6 flex items-center justify-between md:mb-16 md:items-start">
                <span className="grid size-10 place-items-center rounded-full border border-white/10 text-[#c8ff3d] transition-colors group-hover:border-[#c8ff3d]/40 md:size-12">
                  <Icon name={AREA_CARD_ICONS[area.id]} />
                </span>
                <span className="font-mono text-xs text-white/30">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mb-2 text-xl font-semibold tracking-[-0.03em] text-[#f2f3ee] md:mb-3 md:text-2xl md:tracking-[-0.035em]">
                {area.label}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-white/55 md:mb-8 md:min-h-20">
                {area.description}
              </p>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {area.tools.slice(0, 4).map((tool) => (
                  <span className="tag" key={tool}>
                    {tool}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 02 Áreas & Experiencia (Tabs) en banda clara de contraste */}
      <section
        id="areas"
        ref={areasRef}
        className="border-y border-white/10 bg-[#f1f2ec] text-[#111411]"
      >
        <div className="section-wrap">
          <div className="section-label !text-black/45">
            <span className="!text-black">02</span> Áreas &amp; Trayectoria
          </div>

          <div className="mb-12 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <h2 className="section-title">
              Experiencia por
              <br />
              área de impacto.
            </h2>
            <p className="max-w-sm leading-relaxed text-black/55">
              Selecciona un área para explorar mi enfoque, herramientas y la experiencia laboral aplicada en cada una.
            </p>
          </div>

          <AreaTabs
            areas={areas}
            activeAreaId={activeAreaId}
            onSelect={setActiveAreaId}
          />

          {activeArea && <AreaSection area={activeArea} />}
        </div>
      </section>

      {/* 03 Formación */}
      <EducationSection />

      {/* 04 Contacto */}
      <section id="contacto" className="px-6 pb-8 pt-10 lg:px-10">
        <div className="mx-auto max-w-[1400px] overflow-hidden rounded-3xl bg-[#c8ff3d] px-7 py-12 text-[#0b0d0c] md:px-12 md:py-16 lg:px-20 lg:py-20">
          <p className="mb-8 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em]">
            <span className="size-2 rounded-full bg-black" /> El siguiente reto
          </p>
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <h2 className="max-w-4xl text-[clamp(2.8rem,7vw,6.8rem)] font-semibold leading-[0.88] tracking-[-0.07em]">
              ¿Construimos algo que importe?
            </h2>
            <div className="flex flex-wrap gap-3">
              <a
                className="group flex shrink-0 items-center justify-between gap-6 rounded-full bg-[#0b0d0c] px-7 py-5 font-semibold text-white transition-transform hover:scale-[1.02]"
                href="mailto:leonelexequielvincent@gmail.com"
              >
                Escríbeme{' '}
                <Icon
                  name="arrow"
                  className="size-5 transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                className="flex shrink-0 items-center gap-2 rounded-full border border-black/25 bg-black/5 px-6 py-5 font-semibold text-[#0b0d0c] transition hover:bg-black/10"
                href="https://www.linkedin.com/in/leonel-vincent-cabrera/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="linkedin" className="size-5" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
