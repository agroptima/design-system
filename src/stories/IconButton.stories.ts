import type { StoryObj } from '@storybook/nextjs'
import { IconButton } from '../atoms/Button'

const meta = {
  title: 'Design System/Atoms/IconButton',
  component: IconButton,
  parameters: {
    docs: {
      description: {
        component:
          '<h2>Usage guidelines</h2>' +
          '<p>An icon is a graphical representation of meaning. Icons can be used to express actions, state, and even to categorize data.</p>' +
          '<ul>' +
          ' <li>Graphics that are clear, intuitive, and simple enjoy a higher degree of recognition and are more easily understood</li>' +
          ' <li>All icons in the user interface should be consistent in style (detail design, perspective, stroke weight, etc.)</li>' +
          ' <li>Use tooltips</li>' +
          '</ul>' +
          '<p>For more information about the Button usage, check its guidelines.</p>',
      },
    },
  },
  tags: ['autodocs', 'Action components'],
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
    visible: {
      description: 'Is the button visible?',
      control: { type: 'boolean', default: true },
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

export const Tertiary: Story = {
  args: {
    icon: 'Delete',
    variant: 'tertiary',
    accessibilityLabel: 'Delete game',
    disabled: false,
  },
  parameters: figmaPrimaryDesign,
}
