import { addons } from 'storybook/manager-api'
import {
  defaultConfig,
  type TagBadgeParameters,
} from 'storybook-addon-tag-badges'

addons.setConfig({
  tagBadges: [
    {
      tags: 'Layout components',
      badge: {
        text: '⿻ Layout',
        style: {
          backgroundColor: '#BDB2FF',
          color: '#282828ff',
        },
      },
      display: {
        sidebar: [
          {
            type: 'component',
            skipInherited: true,
          },
        ],
        toolbar: true,
        mdx: true,
      },
    },
    {
      tags: 'Action components',
      badge: {
        text: '👆 Action',
        style: {
          backgroundColor: '#98f5e1',
          color: '#282828ff',
        },
      },
      display: {
        sidebar: [
          {
            type: 'component',
            skipInherited: true,
          },
        ],
        toolbar: true,
        mdx: true,
      },
    },
    {
      tags: 'Styles',
      badge: {
        text: '💅 Styles',
        style: {
          backgroundColor: '#A0C4FF',
          color: '#282828ff',
        },
      },
      display: {
        sidebar: [
          {
            type: 'docs',
            skipInherited: true,
          },
        ],
        toolbar: true,
        mdx: true,
      },
    },
    {
      tags: 'Styles',
      badge: {
        text: '💅 Styles',
        style: {
          backgroundColor: '#A0C4FF',
          color: '#282828ff',
        },
      },
      display: {
        sidebar: [
          {
            type: 'story',
            skipInherited: true,
          },
        ],
        toolbar: true,
        mdx: true,
      },
    },
    {
      tags: 'Navigation components',
      badge: {
        text: '🧭 Navigation',
        style: {
          backgroundColor: '#ff99c8',
          color: '#282828ff',
        },
      },
      display: {
        sidebar: [
          {
            type: 'component',
            skipInherited: true,
          },
        ],
        toolbar: true,
        mdx: true,
      },
    },
    {
      tags: 'Data entry components',
      badge: {
        text: '⌨️ Data entry',
        style: {
          backgroundColor: '#ffd6ff',
          color: '#282828ff',
        },
      },
      display: {
        sidebar: [
          {
            type: 'component',
            skipInherited: true,
          },
        ],
        toolbar: true,
        mdx: true,
      },
    },
    {
      tags: 'Data display components',
      badge: {
        text: '🖼️Data display',
        style: {
          backgroundColor: '#d7e3fc',
          color: '#282828ff',
        },
      },
      display: {
        sidebar: [
          {
            type: 'component',
            skipInherited: true,
          },
        ],
        toolbar: true,
        mdx: true,
      },
    },
    {
      tags: 'Feedback components',
      badge: {
        text: '💬 Feedback',
        style: {
          backgroundColor: '#CAFFBF',
          color: '#282828ff',
        },
      },
      display: {
        sidebar: [
          {
            type: 'component',
            skipInherited: true,
          },
        ],
        toolbar: true,
        mdx: true,
      },
    },
    {
      tags: 'Components',
      badge: {
        text: '🧩 Components',
        style: {
          backgroundColor: '#A70351',
          color: '#ffffffff',
        },
      },
      display: {
        sidebar: [
          {
            type: 'component',
            skipInherited: true,
          },
        ],
        toolbar: true,
        mdx: true,
      },
    },
    {
      tags: 'Documentation',
      badge: {
        text: '📖 Docs',
        style: {
          backgroundColor: '#7209b7',
          color: '#ffffffff',
        },
      },
      display: {
        sidebar: [
          {
            type: 'story',
            skipInherited: true,
          },
        ],
        toolbar: true,
        mdx: true,
      },
    },
    {
      tags: 'Documentation',
      badge: {
        text: '📖 Docs',
        style: {
          backgroundColor: '#7209b7',
          color: '#ffffffff',
        },
      },
      display: {
        sidebar: [
          {
            type: 'docs',
            skipInherited: true,
          },
        ],
        toolbar: true,
        mdx: true,
      },
    },
    // Place the default config after your custom matchers.
    ...defaultConfig,
  ] satisfies TagBadgeParameters,
})
