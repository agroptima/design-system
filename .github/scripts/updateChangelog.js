const fs = require('fs')
const path = require('path')
const { cleanPrTitle, insertChangelogEntry } = require('./versionHelpers')

const version = process.argv[2]
const rawTitle = process.argv[3]

if (!version || !rawTitle) {
  console.error('Usage: node updateChangelog.js <version> "<pr-title>"')
  process.exit(1)
}

const changelogPath = path.join(process.cwd(), 'src/stories/Changelog.mdx')
const content = fs.readFileSync(changelogPath, 'utf-8')
const prTitle = cleanPrTitle(rawTitle)
const updated = insertChangelogEntry(content, version, prTitle)
fs.writeFileSync(changelogPath, updated, 'utf-8')
console.log(`Added changelog entry for ${version}: ${prTitle}`)
