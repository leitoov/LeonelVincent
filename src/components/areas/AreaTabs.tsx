import type { AreaId, AreaWithExperiences } from '../../types/area'
import Icon, { type IconName } from '../common/Icon'

interface AreaTabsProps {
  areas: AreaWithExperiences[]
  activeAreaId: AreaId
  onSelect: (id: AreaId) => void
}

const AREA_ICONS: Record<AreaId, IconName> = {
  producto: 'spark',
  gestion: 'team',
  desarrollo: 'code',
}

export default function AreaTabs({ areas, activeAreaId, onSelect }: AreaTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Áreas profesionales"
      className="grid grid-cols-3 gap-1.5 rounded-2xl border border-black/10 bg-black/[0.05] p-1.5 sm:gap-3 sm:border-0 sm:bg-transparent sm:p-0"
    >
      {areas.map((area, index) => {
        const isActive = area.id === activeAreaId
        return (
          <button
            key={area.id}
            role="tab"
            type="button"
            aria-selected={isActive}
            aria-controls={`panel-${area.id}`}
            id={`tab-${area.id}`}
            onClick={() => onSelect(area.id)}
            className={`group flex flex-col items-center justify-center gap-1.5 rounded-xl px-2 py-3 text-center transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:rounded-2xl sm:border sm:p-5 sm:text-left ${
              isActive
                ? 'bg-[#0b0d0c] text-[#f2f3ee] shadow-lg shadow-black/15 sm:border-[#0b0d0c] sm:shadow-xl'
                : 'text-[#111411] hover:bg-white/60 sm:border-black/15 sm:bg-white/70 sm:hover:border-black/30 sm:hover:bg-white'
            }`}
          >
            <div className="flex flex-col items-center gap-1.5 sm:flex-row sm:items-center sm:gap-3.5">
              <span
                className={`grid size-8 shrink-0 place-items-center rounded-full border transition sm:size-11 ${
                  isActive
                    ? 'border-[#c8ff3d]/30 bg-[#c8ff3d] text-[#0b0d0c]'
                    : 'border-black/10 bg-white/80 text-[#111411] sm:bg-black/[0.04] sm:group-hover:bg-black/[0.08]'
                }`}
              >
                <Icon name={AREA_ICONS[area.id]} className="size-4 sm:size-5" />
              </span>
              <div>
                <span
                  className={`hidden font-mono text-[11px] uppercase tracking-[0.14em] sm:block ${
                    isActive ? 'text-[#c8ff3d]' : 'text-black/45'
                  }`}
                >
                  0{index + 1} · {area.eyebrow}
                </span>
                <span className="block text-xs font-semibold tracking-[-0.01em] sm:mt-0.5 sm:text-lg sm:tracking-[-0.02em]">
                  {area.label}
                </span>
              </div>
            </div>

            <span
              className={`hidden rounded-full px-2.5 py-1 font-mono text-xs font-semibold sm:inline-block ${
                isActive
                  ? 'bg-white/10 text-[#c8ff3d]'
                  : 'bg-black/[0.06] text-black/60'
              }`}
            >
              {area.experiences.length}
            </span>
          </button>
        )
      })}
    </div>
  )
}
