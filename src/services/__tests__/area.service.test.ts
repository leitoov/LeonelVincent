import { describe, expect, it } from 'vitest'
import { getAreas } from '../area.service'
import areasData from '../../constants/areas.json'

describe('area.service', () => {
  it('returns the three areas in order: producto, gestion, desarrollo', () => {
    const areas = getAreas()
    expect(areas.map((a) => a.id)).toEqual(['producto', 'gestion', 'desarrollo'])
  })

  it('resolves every experienceId defined in areas.json without dropping entries', () => {
    const areas = getAreas()
    areasData.forEach((rawArea, idx) => {
      expect(areas[idx].experiences.length).toBe(rawArea.experiences.length)
      areas[idx].experiences.forEach((entry) => {
        expect(entry.experience.id).toBeTruthy()
        expect(entry.experience.company).toBeTruthy()
        expect(entry.focus).toBeTruthy()
        expect(entry.highlights.length).toBeGreaterThan(0)
      })
    })
  })

  it('enables Figma embed only on producto -> stefanini', () => {
    const areas = getAreas()
    const producto = areas.find((a) => a.id === 'producto')
    const stefaniniProducto = producto?.experiences.find(
      (e) => e.experience.id === 'stefanini'
    )
    expect(stefaniniProducto?.showEmbed).toBe(true)
    expect(stefaniniProducto?.experience.embedUrl).toContain('embed.figma.com')
  })
})

