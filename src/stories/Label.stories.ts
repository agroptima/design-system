import type { StoryObj } from '@storybook/react'
import { Label } from '../atoms/Label'

const meta = {
  title: 'Design System/Atoms/Label',
  component: Label,
  parameters: {
    docs: {
      description: {
        component:
          '<h2>Usage guidelines</h2><ul><li>Element represents a caption for an item in a user interface.</li></ul>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Text or element to be shown on the component.',
    },
    required: {
      description: 'Is the label required?',
    },
    disabled: {
      description: 'Is the label disabled?',
    },
    htmlFor: {
      description: 'Value needed for the label relation',
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
    children: 'Label text',
  },
  parameters: figmaPrimaryDesign,
}

export const WithRequired: Story = {
  args: {
    children: 'Label text',
    required: true,
  },
  parameters: figmaPrimaryDesign,
}

export const WithDisabled: Story = {
  args: {
    children: 'Label text',
    disabled: true,
  },
  parameters: figmaPrimaryDesign,
}
