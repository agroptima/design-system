import '../src/index.scss'
import { INITIAL_VIEWPORTS } from 'storybook/viewport'
import type { Preview } from '@storybook/nextjs'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
    },
    options: {
      storySort: {
        order: [
          'Welcome',
          'Changelog',
          'Component creation workflow',
          'Programmers start guide',
          '*',
        ],
      },
    },
    viewport: {
      options: INITIAL_VIEWPORTS,
    },
  },

  tags: ['autodocs'],
}

export default preview
