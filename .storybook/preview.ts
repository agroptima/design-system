import type { Preview } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

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
      viewports: INITIAL_VIEWPORTS,
    },
  },
}

export default preview
