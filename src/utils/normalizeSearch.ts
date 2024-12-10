export function normalizeSearch(value: string): string {
  const pattern = value.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  return pattern.replace(/[^a-zA-Z0-9_]/g, '').toLowerCase()
}
