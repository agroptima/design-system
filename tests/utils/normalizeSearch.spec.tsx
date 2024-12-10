import { normalizeSearch } from '../../src/utils/normalizeSearch'

describe('normalizeSearch', () => {
  it('returns a normalize string without unusual characters, capital letters or accents', () => {
    expect(normalizeSearch('Piñón')).toBe('pinon')
  })
})
