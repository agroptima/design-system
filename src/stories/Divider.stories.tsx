import type { StoryObj } from '@storybook/react'
import { IconButton } from '../atoms/Button'
import { Divider } from '../atoms/Divider'

const meta = {
  title: 'Design System/Atoms/Divider',
  component: Divider,
  parameters: {
    docs: {
      description: {
        component:
          '<h2>Usage guidelines</h2>' +
          '<p>A Divider component separates different content.</p>' +
          '<ul>' +
          ' <li>Place a divider below a header</li>' +
          '</ul>',
      },
    },
  },
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
    title: '19/01/2025 - My gaming diary',
    variant: 'primary',
    icon: 'DeliveryNote',
  },
  parameters: figmaPrimaryDesign,
}

export const WithLine: Story = {
  args: {
    title: '19/01/2025 - My gaming diary',
    icon: 'Line',
  },
  parameters: figmaPrimaryDesign,
}

export const WithIcon: Story = {
  args: {
    title: '19/01/2025 - My gaming diary',
    icon: 'DeliveryNote',
  },
  parameters: figmaPrimaryDesign,
}

export const WithLink: Story = {
  args: {
    title: '19/01/2025 - My gaming diary',
    variant: 'primary',
    hasAction: true,
    onClick: () => alert('click'),
  },
  parameters: figmaPrimaryDesign,
}

export const WithButton: Story = {
  args: {
    title: '19/01/2025 - My gaming diary',
    icon: 'Delete',
    children: <IconButton icon="Delete" accessibilityLabel="Delete" />,
  },
  parameters: figmaPrimaryDesign,
}

export const NoIcon: Story = {
  args: {
    title: '19/01/2025 - My gaming diary',
  },
  parameters: figmaPrimaryDesign,
}

export const NoTitle: Story = {
  parameters: figmaPrimaryDesign,
}
