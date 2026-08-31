import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { breakpoints } from '../src/settings/breakpoints'

function parseScssBreakpoints(): Record<string, number> {
  const scss = readFileSync(
    join(__dirname, '../src/settings/_breakpoints.scss'),
    'utf8',
  )
  return Object.fromEntries(
    [...scss.matchAll(/^\$([\w-]+):\s*(\d+)px;/gm)].map(([, name, value]) => [
      name,
      Number(value),
    ]),
  )
}

describe('breakpoints', () => {
  it('keeps the TypeScript and SCSS definitions in sync', () => {
    expect({ ...breakpoints }).toEqual(parseScssBreakpoints())
  })
})
