import { computed } from 'vue'
import { getPresentation } from '../services/content.service'

const presentation = getPresentation()

export function useContent() {
  return {
    presentation: computed(() => presentation),
  }
}
