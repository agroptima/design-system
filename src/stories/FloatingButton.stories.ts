import type { StoryObj } from '@storybook/react'
import { FloatingButton } from '../atoms/Button'

const meta = {
  title: 'Design System/Atoms/FloatingButton',
  component: FloatingButton,
  parameters: {
    docs: {
      description: {
        component:
          '<h2>Usage guidelines</h2>' +
          "<p>The floating action button (FAB) performs the primary, or most common, action on a screen. It appears in front of all screen content, typically as a circular shape with an icon in its center. Only use a FAB if it is the most suitable way to present a screen's primary action. It's FABulous!✨</p>",
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    accessibilityLabel: {
      description: 'Accessible name & description of the element',
    },
    variant: {
      description: 'Component variant used from a list of values',
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
    loading: {
      description: 'Is the button in loading state?',
      control: { type: 'boolean' },
    },
  },
}

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/DN2ova21vWqCRvPspBXgI1/Design-System?node-id=2726-1430&m=dev',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Link: Story = {
  args: {
    icon: 'Add',
    variant: 'primary',
    accessibilityLabel: 'Edit game',
    href: 'link.com',
    shape: 'circle',
  },
  parameters: figmaPrimaryDesign,
}

export const Button: Story = {
  args: {
    icon: 'Add',
    variant: 'primary',
    accessibilityLabel: 'Delete game',
    disabled: false,
    shape: 'circle',
  },
  parameters: figmaPrimaryDesign,
}

export const RoundedSquareLink: Story = {
  args: {
    icon: 'Add',
    variant: 'primary',
    accessibilityLabel: 'Edit game',
    href: 'link.com',
  },
  parameters: figmaPrimaryDesign,
}

export const RoundedSquareButton: Story = {
  args: {
    icon: 'Add',
    variant: 'primary',
    accessibilityLabel: 'Delete game',
    disabled: false,
  },
  parameters: figmaPrimaryDesign,
}
