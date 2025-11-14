import '../src/index.scss'
import { withThemeByClassName } from '@storybook/addon-themes'
import type { Preview, ReactRenderer } from '@storybook/nextjs'
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
  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: {
        pistachio: 'pistachio',
        strawberry: 'strawberry',
      },
      defaultTheme: 'pistachio',
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
