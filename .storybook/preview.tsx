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
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        // items: ['bacosoft', 'isagri', 'side-by-side'],
        items: [
          { value: 'bacosoft', icon: 'bold', title: 'bacosoft' },
          { value: 'isagri', icon: 'branch', title: 'isagri' },
          { value: 'side-by-side', icon: 'sidebyside', title: 'side by side' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'bacosoft',
  },
  decorators: [
    (Story, context) => {
      const {
        globals: { theme },
      } = context
      if (theme === 'side-by-side') {
        return (
          <div className="side-by-side">
            <div className="bacosoft">
              <Story />
            </div>
            <div className="isagri">
              <Story />
            </div>
          </div>
        )
      } else {
        return (
          <div className={theme}>
            <Story />
          </div>
        )
      }
    },
  ],
}

export default preview
