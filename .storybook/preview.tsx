import '../src/index.scss'
import { withThemeByClassName } from '@storybook/addon-themes'
import type { Preview, ReactRenderer } from '@storybook/nextjs'
import { INITIAL_VIEWPORTS } from 'storybook/viewport'

const DEFAULT_THEME = 'pistachio'

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
  initialGlobals: {
    theme: DEFAULT_THEME,
  },
  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: {
        pistachio: 'pistachio',
        strawberry: 'strawberry',
      },
      defaultTheme: DEFAULT_THEME,
    }),
    (Story, context) => (
      <div className={context.globals.theme}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs', 'Components'],
}

export default preview
