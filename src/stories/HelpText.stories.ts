import type { StoryObj } from '@storybook/nextjs'
import { HelpText } from '../atoms/HelpText'

const meta = {
  title: 'Design System/Atoms/HelpText',
  component: HelpText,
  parameters: {
    docs: {
      description: {
        component:
          '<h2>Usage guidelines</h2>' +
          '<p>HelpText component provides either an informative description or an error message that gives more context about what a user needs to input. It’s commonly used in forms.</p>',
      },
    },
  },
  tags: ['autodocs', 'Feedback components'],
  argTypes: {
    helpText: {
      description: 'Label for the input',
    },
    errors: {
      description:
        'Describes the input purpose. If empty, label content will be used',
    },
  },
}

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=68-211&mode=dev',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    helpText: 'This text can help you',
  },
  parameters: figmaPrimaryDesign,
}

export const WidthErrors: Story = {
  args: {
    helpText: 'This text can help you',
    errors: [
      'This is an error',
      'This is another error',
      'This is a third error',
    ],
  },
  parameters: figmaPrimaryDesign,
}
