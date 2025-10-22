import '../src/index.scss'
import type { Preview } from '@storybook/nextjs'
import { INITIAL_VIEWPORTS } from 'storybook/viewport'

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

  tags: ['autodocs', 'Components'],
}

export default preview
