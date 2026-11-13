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
        className="relative flex min-h-[90vh] items-end border-b border-white/10 px-6 pb-16 pt-36 lg:px-10 lg:pb-24"
      >
        <div className="pointer-events-none absolute right-[-6rem] top-24 size-[34rem] rounded-full bg-[#c8ff3d]/[0.08] blur-[130px]" />
        <div className="mx-auto grid w-full max-w-[1400px] items-end gap-12 lg:grid-cols-[1fr_340px]">
          <div>
            <div className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#c8ff3d]">
              <span className="size-2 rounded-full bg-[#c8ff3d] shadow-[0_0_16px_#c8ff3d]" />
              {presentation.title} · Disponible para nuevos retos
            </div>
            <p className="mb-4 text-lg text-white/50 md:text-xl">
              {presentation.tagline}
            </p>
            <h1 className="max-w-[1100px] text-[clamp(3.2rem,8.5vw,8.5rem)] font-semibold leading-[0.88] tracking-[-0.075em]">
              Construyo sistemas.
              <br />
              <span className="text-white/[0.28]">Impulso equipos.</span>
            </h1>
          </div>

          <div className="border-l border-white/15 pl-6 lg:mb-2">
            <p className="text-base leading-relaxed text-white/65 md:text-lg">
              {presentation.intro[0]}
            </p>
            <a
              href="#areas"
              onClick={scrollToSection('areas')}
              className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-[#c8ff3d] transition-transform hover:translate-x-0.5"
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

        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <h2 className="section-title">
            Tecnología al servicio
            <br />
            de las personas.
          </h2>
          <div>
            <div className="space-y-4 text-xl leading-relaxed tracking-[-0.02em] text-white/75 md:text-2xl">
              {presentation.intro.slice(1).map((paragraph) => (
                <p key={paragraph.substring(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-14 grid border-y border-white/10 md:grid-cols-3">
              {[
                ['8+', 'años creando software'],
                ['3 áreas', 'Producto, Gestión y Dev'],
                ['IA-First', 'integrada en el día a día'],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="py-7 md:border-l md:border-white/10 md:px-7 md:first:border-l-0 md:first:pl-0"
                >
                  <strong className="block text-4xl font-semibold tracking-[-0.05em] text-[#c8ff3d]">
                    {value}
                  </strong>
                  <span className="mt-2 block text-sm text-white/45">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resumen rápido de las 3 áreas que navega directo al tab correspondiente */}
        <div className="mt-24 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-3">
          {areas.map((area, index) => (
            <button
              key={area.id}
              type="button"
              onClick={() => handleSelectAreaAndScroll(area.id)}
              className="group bg-[#101310] p-7 text-left transition-colors hover:bg-[#151a14] md:p-9"
            >
              <div className="mb-16 flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-full border border-white/10 text-[#c8ff3d] transition-colors group-hover:border-[#c8ff3d]/40">
                  <Icon name={AREA_CARD_ICONS[area.id]} />
                </span>
                <span className="font-mono text-xs text-white/30">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mb-3 text-2xl font-semibold tracking-[-0.035em] text-[#f2f3ee]">
                {area.label}
              </h3>
              <p className="mb-8 min-h-20 text-sm leading-relaxed text-white/55">
                {area.description}
              </p>
              <div className="flex flex-wrap gap-2">
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
