const {
  parseVersion,
  compareVersions,
  nextPatch,
  nextMinor,
  nextMajor,
  extractVersionFromDiff,
  findHighestVersion,
  buildComment,
  cleanPrTitle,
  insertChangelogEntry,
} = require('./versionHelpers')

describe('parseVersion', () => {
  it('returns major minor patch from a valid version string', () => {
    expect(parseVersion('1.2.11')).toEqual({ major: 1, minor: 2, patch: 11 })
  })

  it('handles version with zeros', () => {
    expect(parseVersion('2.0.0')).toEqual({ major: 2, minor: 0, patch: 0 })
  })

  it('throws on invalid format', () => {
    expect(() => parseVersion('abc')).toThrow('Invalid version format: "abc"')
  })
})

describe('compareVersions', () => {
  it('returns negative when a is lower than b (patch)', () => {
    expect(compareVersions('1.2.11', '1.2.12')).toBeLessThan(0)
  })

  it('returns positive when a is higher than b (major)', () => {
    expect(compareVersions('2.0.0', '1.9.9')).toBeGreaterThan(0)
  })

  it('returns zero when versions are equal', () => {
    expect(compareVersions('1.2.11', '1.2.11')).toBe(0)
  })

  it('returns positive when minor is higher regardless of patch', () => {
    expect(compareVersions('1.3.0', '1.2.99')).toBeGreaterThan(0)
  })
})

describe('nextPatch', () => {
  it('increments the patch segment', () => {
    expect(nextPatch('1.2.11')).toBe('1.2.12')
  })
})

describe('nextMinor', () => {
  it('increments minor and resets patch to zero', () => {
    expect(nextMinor('1.2.11')).toBe('1.3.0')
  })
})

describe('nextMajor', () => {
  it('increments major and resets minor and patch to zero', () => {
    expect(nextMajor('1.2.11')).toBe('2.0.0')
  })
})

describe('extractVersionFromDiff', () => {
  it('extracts version from a valid unified diff with added version line', () => {
    const diff = [
      '--- a/package.json',
      '+++ b/package.json',
      '@@ -1,5 +1,5 @@',
      ' {',
      '-  "version": "1.2.11",',
      '+  "version": "1.2.12",',
      '   "name": "foo"',
      ' }',
    ].join('\n')
    expect(extractVersionFromDiff(diff)).toBe('1.2.12')
  })

  it('returns null when there is no version line in the diff', () => {
    const diff = [
      '--- a/package.json',
      '+++ b/package.json',
      '@@ -1,5 +1,5 @@',
      ' {',
      '+  "description": "a library"',
      ' }',
    ].join('\n')
    expect(extractVersionFromDiff(diff)).toBeNull()
  })

  it('ignores removed lines (starting with -)', () => {
    const diff = '-  "version": "1.2.11"'
    expect(extractVersionFromDiff(diff)).toBeNull()
  })

  it('handles multiline diff and only extracts the added version line', () => {
    const diff = [
      '--- a/package.json',
      '+++ b/package.json',
      '@@ -1,6 +1,6 @@',
      ' {',
      '-  "version": "1.2.11",',
      '+  "version": "1.2.13",',
      '+  "description": "updated",',
      '   "name": "agroptima-design-system"',
      ' }',
    ].join('\n')
    expect(extractVersionFromDiff(diff)).toBe('1.2.13')
  })
})

describe('findHighestVersion', () => {
  it('returns the highest version from an array', () => {
    expect(findHighestVersion(['1.2.11', '1.2.13', '1.2.12'])).toBe('1.2.13')
  })

  it('handles a single element array', () => {
    expect(findHighestVersion(['1.0.0'])).toBe('1.0.0')
  })

  it('compares correctly across major and minor boundaries', () => {
    expect(findHighestVersion(['1.9.9', '2.0.0', '1.10.0'])).toBe('2.0.0')
  })
})

describe('cleanPrTitle', () => {
  it('strips the [BOD-XXXX] prefix from PR titles', () => {
    expect(cleanPrTitle('[BOD-1654] Add improvements icon')).toBe('Add improvements icon')
  })

  it('leaves titles without prefix unchanged', () => {
    expect(cleanPrTitle('Add improvements icon')).toBe('Add improvements icon')
  })

  it('handles prefixes with different ticket IDs', () => {
    expect(cleanPrTitle('[BOD-123] Fix bug')).toBe('Fix bug')
  })
})

describe('insertChangelogEntry', () => {
  const existingChangelog = [
    'import { Meta } from "@storybook/addon-docs/blocks";',
    '',
    '<Meta title="Changelog" tags={[\'Documentation\',\'!Components\']} />',
    '',
    '# Changelog',
    '',
    '## 1.2.11',
    '',
    '* Disable hover state on notification icon buttons in mobile',
    '',
  ].join('\n')

  it('inserts the new version section before the first existing version', () => {
    const result = insertChangelogEntry(existingChangelog, '1.2.12', 'Add improvements icon')
    const indexNew = result.indexOf('## 1.2.12')
    const indexOld = result.indexOf('## 1.2.11')
    expect(indexNew).toBeGreaterThan(-1)
    expect(indexNew).toBeLessThan(indexOld)
  })

  it('formats the entry with the PR title as a bullet point', () => {
    const result = insertChangelogEntry(existingChangelog, '1.2.12', 'Add improvements icon')
    expect(result).toContain('## 1.2.12\n\n* Add improvements icon')
  })

  it('preserves the existing changelog content intact', () => {
    const result = insertChangelogEntry(existingChangelog, '1.2.12', 'Add improvements icon')
    expect(result).toContain('## 1.2.11')
    expect(result).toContain('* Disable hover state on notification icon buttons in mobile')
  })

  it('preserves the MDX header intact', () => {
    const result = insertChangelogEntry(existingChangelog, '1.2.12', 'Add improvements icon')
    expect(result).toContain('import { Meta }')
    expect(result).toContain('<Meta title="Changelog"')
    expect(result).toContain('# Changelog')
  })
})

describe('buildComment', () => {
  const mainVersion = '1.2.11'
  const otherPRs = [{ prNumber: 123, version: '1.2.12' }]

  it('always contains the HTML marker to avoid duplicate comments', () => {
    const comment = buildComment({ mainVersion, otherPRVersions: [], currentPRVersion: null, targetVersion: '1.2.12', autoBumped: true, hasConflict: false })
    expect(comment).toContain('<!-- version-check-bot -->')
  })

  it('says Auto-bumped when no prior version was present', () => {
    const comment = buildComment({ mainVersion, otherPRVersions: [], currentPRVersion: null, targetVersion: '1.2.12', autoBumped: true, hasConflict: false })
    expect(comment).toContain('Auto-bumped')
    expect(comment).toContain('`1.2.12`')
  })

  it('mentions conflicting PR number when auto-bumped due to conflict', () => {
    const comment = buildComment({ mainVersion, otherPRVersions: otherPRs, currentPRVersion: '1.2.12', targetVersion: '1.2.13', autoBumped: true, hasConflict: true })
    expect(comment).toContain('#123')
    expect(comment).toContain('`1.2.13`')
  })

  it('shows no action needed message when no bump required', () => {
    const comment = buildComment({ mainVersion, otherPRVersions: otherPRs, currentPRVersion: '1.2.13', targetVersion: '1.2.13', autoBumped: false, hasConflict: false })
    expect(comment).toContain('✅')
  })

  it('shows the main version', () => {
    const comment = buildComment({ mainVersion, otherPRVersions: [], currentPRVersion: '1.2.12', targetVersion: '1.2.12', autoBumped: false, hasConflict: false })
    expect(comment).toContain('`1.2.11`')
  })

  it('lists other PRs with their version bumps', () => {
    const comment = buildComment({ mainVersion, otherPRVersions: otherPRs, currentPRVersion: '1.2.13', targetVersion: '1.2.13', autoBumped: false, hasConflict: false })
    expect(comment).toContain('#123')
    expect(comment).toContain('`1.2.12`')
  })

  it('shows a message when no other PRs have version bumps', () => {
    const comment = buildComment({ mainVersion, otherPRVersions: [], currentPRVersion: '1.2.12', targetVersion: '1.2.12', autoBumped: false, hasConflict: false })
    expect(comment).toContain('No other open PRs')
  })
})
