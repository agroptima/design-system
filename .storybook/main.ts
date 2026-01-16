// This file has been automatically migrated to valid ESM format by Storybook.
import type { StorybookConfig } from '@storybook/nextjs'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const require = createRequire(import.meta.url)

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    getAbsolutePath('@storybook/addon-links'),
    '@storybook/addon-a11y',
    '@storybook/addon-designs',
    getAbsolutePath('@storybook/addon-docs'),
    'storybook-addon-tag-badges',
    getAbsolutePath('@storybook/addon-themes'),
  ],

  framework: {
    name: '@storybook/nextjs',
    options: {},
  },

  docs: {},

  core: {},
  staticDirs: ['../public'],

  webpackFinal: async (config) => {
    const pathToInlineSvg = resolve(__dirname, '../src/icons')

    config.module = config.module || {}
    config.module.rules = config.module.rules || []

    // This modifies the existing image rule to exclude .svg files
    // since you want to handle those files with @svgr/webpack
    const imageRule = config.module.rules.find((rule) =>
      rule?.['test']?.test('.svg'),
    )
    if (!imageRule || typeof imageRule !== 'object') return config

    // Configure .svg files to be loaded with @svgr/webpack
    config.module.rules.push({
      ...imageRule,
      test: /\.svg$/i,
      include: pathToInlineSvg,
      use: ['@svgr/webpack'],
    })

    if (imageRule) {
      imageRule['exclude'] = /\.svg$/i
    }

    return config
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
}
export default config
