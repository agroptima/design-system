import type { StorybookConfig } from '@storybook/nextjs'
import { dirname, join, resolve } from 'path'

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
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
    '@storybook/addon-a11y',
    '@storybook/addon-designs',
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
