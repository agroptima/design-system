import type { StoryObj } from '@storybook/react'
import { DateRangePicker } from '../atoms/DateRangePicker'

const meta = {
  title: 'Design System/Atoms/DateRangePicker',
  component: DateRangePicker,
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
    selected: {
      description: 'Selected date or date range',
    },
    lng: {
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
    lng: 'en',
  },
  parameters: figmaPrimaryDesign,
}

export const WithDateRangeSelected: Story = {
  args: {
    variant: 'primary',
    footer: 'From 2024-02-02 to 2024-02-15',
    onSelect: (date) => console.log('onSelect date:', date),
    selected: { from: new Date(2024, 1, 2), to: new Date(2024, 1, 15) },
    lng: 'en',
  },
  parameters: figmaPrimaryDesign,
}
