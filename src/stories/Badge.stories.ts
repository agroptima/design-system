import type { StoryObj } from '@storybook/nextjs'
import { Badge } from '../atoms/Badge'

const meta = {
  title: 'Design System/Atoms/Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component:
          '<h2>Usage guidelines</h2>' +
          '<p>Use Badge component when content is mapped to multiple categories and the user needs a way to differentiate between them such as labeling or read-only situations.</p>',
      },
    },
  },
  tags: ['autodocs', 'Data display components'],
  argTypes: {
    variant: {
      description: 'Component variant used',
    },
    text: {
      description: 'Component text',
    },
    accessibilityLabel: {
      description: 'Describes the component purpose',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=2137-1803&mode=dev',
  },
}

export const BadgeWithText: Story = {
  args: {
    variant: 'error',
    text: 'Game over',
    accessibilityLabel: 'You have lost the game',
  },
  parameters: figmaPrimaryDesign,
}

export const BadgeWithNumber: Story = {
  args: {
    variant: 'warning',
    text: '1',
    accessibilityLabel: 'There is one item to review',
  },
  parameters: figmaPrimaryDesign,
}

export const BadgeWithNumbers: Story = {
  args: {
    variant: 'success-outlined',
    text: '88',
    accessibilityLabel: 'You have earned 88 points',
  },
  parameters: figmaPrimaryDesign,
}

export const BadgeWithDot: Story = {
  args: {
    variant: 'success',
    isDot: true,
    accessibilityLabel: 'There are items enabled',
  },
  parameters: figmaPrimaryDesign,
}

export const BadgeWithIcon: Story = {
  args: {
    variant: 'success-outlined',
    accessibilityLabel: 'There are items enabled',
    icon: 'PDF',
  },
  parameters: figmaPrimaryDesign,
}
