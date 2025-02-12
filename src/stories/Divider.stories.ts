import type { StoryObj } from '@storybook/react'
import { Divider } from '../atoms/Divider'

const meta = {
  title: 'Design System/Atoms/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'A title for divider',
    },
    icon: {
      description: 'Optional icon that is added next to the title divider ',
    },
    variant: 'primary',
  },
}

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/DN2ova21vWqCRvPspBXgI1/Design-System?node-id=3760-1578&p=f&t=C1SvMqG638Ei5ASv-0',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    title: '19/01/2025 - Delivery Note',
    variant: 'primary',
  },
  parameters: figmaPrimaryDesign,
}

export const WithIcon: Story = {
  args: {
    title: '19/01/2025 - Delivery Note',
    icon: 'DeliveryNote',
    variant: 'primary',
  },
  parameters: figmaPrimaryDesign,
}
