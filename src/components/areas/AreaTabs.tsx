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
      className="grid grid-cols-1 gap-3 sm:grid-cols-3"
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
            className={`group flex items-center justify-between gap-3 rounded-2xl border p-5 text-left transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
              isActive
                ? 'border-[#0b0d0c] bg-[#0b0d0c] text-[#f2f3ee] shadow-xl shadow-black/15'
                : 'border-black/15 bg-white/70 text-[#111411] hover:border-black/30 hover:bg-white'
            }`}
          >
            <div className="flex items-center gap-3.5">
              <span
                className={`grid size-11 shrink-0 place-items-center rounded-full border transition ${
                  isActive
                    ? 'border-[#c8ff3d]/30 bg-[#c8ff3d] text-[#0b0d0c]'
                    : 'border-black/10 bg-black/[0.04] text-[#111411] group-hover:bg-black/[0.08]'
                }`}
              >
                <Icon name={AREA_ICONS[area.id]} className="size-5" />
              </span>
              <div>
                <span
                  className={`block font-mono text-[11px] uppercase tracking-[0.14em] ${
                    isActive ? 'text-[#c8ff3d]' : 'text-black/45'
                  }`}
                >
                  0{index + 1} · {area.eyebrow}
                </span>
                <span className="mt-0.5 block text-lg font-semibold tracking-[-0.02em]">
                  {area.label}
                </span>
              </div>
            </div>

            <span
              className={`rounded-full px-2.5 py-1 font-mono text-xs font-semibold ${
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
