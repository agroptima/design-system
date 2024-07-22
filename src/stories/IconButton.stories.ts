import { StoryObj } from '@storybook/react'
import { IconButton } from '../atoms/Button'

const meta = {
  title: 'Design System/Atoms/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    accessibilityLabel: {
      description: 'Accessible name & description of the element',
    },
    variant: {
      description: 'IconButton variant used from a list of values',
    },
    disabled: {
      description: 'Is the button in disabled state?',
    },
    icon: {
      description: 'Icon from a list of values',
      control: { type: 'select' },
    },
    href: {
      description:
        'If a link is provided, the component will be rendered as NextLink, otherwise as button',
    },
  },
}

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=1873-922&mode=dev',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Link: Story = {
  args: {
    icon: 'Edit',
    variant: 'primary',
    accessibilityLabel: 'Edit game',
    href: 'link.com',
    disabled: false,
  },
  parameters: figmaPrimaryDesign,
}

export const Primary: Story = {
  args: {
    icon: 'Delete',
    variant: 'primary',
    accessibilityLabel: 'Delete game',
    disabled: false,
  },
  parameters: figmaPrimaryDesign,
}

export const Secondary: Story = {
  args: {
    icon: 'Delete',
    variant: 'secondary',
    accessibilityLabel: 'Delete game',
    disabled: false,
  },
  parameters: figmaPrimaryDesign,
}
