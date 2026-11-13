import { useMemo, useState } from 'react'
import { getAreas } from '../services/area.service'
import type { AreaId } from '../types/area'

const areas = getAreas()

export function useAreas() {
  const [activeAreaId, setActiveAreaId] = useState<AreaId>(areas[0]?.id ?? 'producto')

  const activeArea = useMemo(
    () => areas.find((area) => area.id === activeAreaId) ?? areas[0],
    [activeAreaId]
  )

  return {
    areas,
    activeAreaId,
    activeArea,
    setActiveAreaId,
  }
}

