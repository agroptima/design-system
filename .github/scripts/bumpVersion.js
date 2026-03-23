const fs = require('fs')

const version = process.argv[2]
if (!version) {
  console.error('Usage: node bumpVersion.js <version>')
  process.exit(1)
}

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'))
pkg.version = version
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n')
console.log(`Bumped version to ${version}`)
