/**
 * @param {string} versionString - e.g. '1.2.11'
 * @returns {{ major: number, minor: number, patch: number }}
 */
function parseVersion(versionString) {
  const match = versionString.match(/^(\d+)\.(\d+)\.(\d+)$/)
  if (!match) {
    throw new Error(`Invalid version format: "${versionString}"`)
  }
  return {
    major: parseInt(match[1], 10),
    minor: parseInt(match[2], 10),
    patch: parseInt(match[3], 10),
  }
}

/**
 * Compara dos versiones. Negativo si a < b, positivo si a > b, 0 si iguales.
 * @param {string} a
 * @param {string} b
 * @returns {number}
 */
function compareVersions(a, b) {
  const va = parseVersion(a)
  const vb = parseVersion(b)
  if (va.major !== vb.major) return va.major - vb.major
  if (va.minor !== vb.minor) return va.minor - vb.minor
  return va.patch - vb.patch
}

/** @param {string} version @returns {string} */
function nextPatch(version) {
  const { major, minor, patch } = parseVersion(version)
  return `${major}.${minor}.${patch + 1}`
}

/** @param {string} version @returns {string} */
function nextMinor(version) {
  const { major, minor } = parseVersion(version)
  return `${major}.${minor + 1}.0`
}

/** @param {string} version @returns {string} */
function nextMajor(version) {
  const { major } = parseVersion(version)
  return `${major + 1}.0.0`
}

/**
 * Extrae la nueva versión de un diff de package.json en formato unified patch.
 * Busca líneas añadidas (empiezan con `+` pero no `+++`) que contengan "version":
 * @param {string} patchString
 * @returns {string|null}
 */
function extractVersionFromDiff(patchString) {
  const lines = patchString.split('\n')
  for (const line of lines) {
    if (line.startsWith('+') && !line.startsWith('+++')) {
      const match = line.match(/"version"\s*:\s*"([^"]+)"/)
      if (match) return match[1]
    }
  }
  return null
}

/**
 * Devuelve la versión más alta de un array de strings de versión.
 * @param {string[]} versions
 * @returns {string}
 */
function findHighestVersion(versions) {
  return [...versions].sort(compareVersions).at(-1)
}

/**
 * Construye el comentario markdown para el bot de versión.
 * @param {{ mainVersion: string, otherPRVersions: Array<{prNumber: number, version: string}>, currentPRVersion: string|null, targetVersion: string, autoBumped: boolean, hasConflict: boolean }} options
 * @returns {string}
 */
function buildComment({ mainVersion, otherPRVersions, currentPRVersion, targetVersion, autoBumped, hasConflict }) {
  const marker = '<!-- version-check-bot -->'

  const otherPRsSection =
    otherPRVersions.length > 0
      ? otherPRVersions.map((p) => `- #${p.prNumber} → \`${p.version}\``).join('\n')
      : '_No other open PRs bump the version._'

  let statusSection
  if (autoBumped && hasConflict) {
    const conflictingPR = otherPRVersions.find((p) => p.version === currentPRVersion)
    statusSection = `⚠️ **Conflict resolved** — version \`${currentPRVersion}\` was already taken by #${conflictingPR.prNumber}. Auto-bumped to \`${targetVersion}\`.`
  } else if (autoBumped) {
    statusSection = `🔧 **Auto-bumped to \`${targetVersion}\`** — no version bump was detected in this PR.`
  } else {
    statusSection = `✅ **Version \`${targetVersion}\` is available.** No action needed.`
  }

  return [
    marker,
    `## 📦 Version Check`,
    ``,
    `**Current version in \`main\`**: \`${mainVersion}\``,
    ``,
    `**Open PRs with version bumps:**`,
    otherPRsSection,
    ``,
    statusSection,
  ].join('\n')
}

/**
 * Elimina el prefijo [BOD-XXXX] de los títulos de PR.
 * @param {string} title
 * @returns {string}
 */
function cleanPrTitle(title) {
  return title.replace(/^\[[^\]]+\]\s*/, '')
}

/**
 * Inserta una nueva entrada de versión al inicio del listado de versiones en Changelog.mdx.
 * @param {string} changelogContent - Contenido completo del archivo Changelog.mdx
 * @param {string} version - Versión a insertar, e.g. '1.2.12'
 * @param {string} prTitle - Título de la PR (ya limpio, sin prefijo)
 * @returns {string} - Contenido modificado
 */
function insertChangelogEntry(changelogContent, version, prTitle) {
  const newEntry = `## ${version}\n\n* ${prTitle}\n\n`
  // Insertar justo antes del primer encabezado de versión (## X.Y.Z)
  return changelogContent.replace(/(# Changelog\n\n)/, `$1${newEntry}`)
}

module.exports = {
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
}
