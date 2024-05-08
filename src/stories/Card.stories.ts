import { Card } from '../atoms/Card'
import { StoryObj } from '@storybook/react'

const meta = {
  title: 'Design System/Atoms/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Select variant used',
    },
    summary: {
      description:
        'Summary of the table purpose and structure for assistive technologies',
    },
    headers: {
      description:
        'Array of values to be displayed on the headers. columnId value must match with rows columns ids.',
    },
    rows: {
      description: 'Array of values to be displayed as the data',
    },
  },
}

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=2236-754&mode=dev',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    title: 'Tekken 8',
    description: 'A fighting game',
  },
  parameters: figmaPrimaryDesign,
}
