import type { StoryObj } from '@storybook/react'
import { DatePicker } from '../atoms/DatePicker'

const meta = {
  title: 'Design System/Atoms/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    footer: {
      description: 'Text for the footer',
    },
    variant: {
      description: 'Component variant used',
    },
    onSelect: {
      description: 'Component onSelect callback',
    },
    locale: {
      description: 'String with the locale to be used on the translations',
    },
  },
}

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/DN2ova21vWqCRvPspBXgI1/Design-System?node-id=3665-571&m=dev',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    footer: 'Pick a day.',
    onSelect: (date) => console.log('onSelect date:', date),
  },
  parameters: figmaPrimaryDesign,
}

export const WithDateSelected: Story = {
  args: {
    variant: 'primary',
    footer: 'From 2024-02-02 to 2024-02-15',
    onSelect: (date) => console.log('onSelect date:', date),
    selected: { from: new Date(2024, 1, 2), to: new Date(2024, 1, 15) },
  },
  parameters: figmaPrimaryDesign,
}
