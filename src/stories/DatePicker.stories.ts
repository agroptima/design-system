import type { StoryObj } from '@storybook/react'
import { DatePicker } from '../atoms/DatePicker/DatePicker'

const meta = {
  title: 'Design System/Atoms/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
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
    type: {
      description: 'Type of date that could be range or single',
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

export const SingleDatePicker: Story = {
  args: {
    variant: 'primary',
    onSelect: (date) => console.log('onSelect date:', date),
    lng: 'en',
    type: 'single',
  },
}

export const RangeDatePicker: Story = {
  args: {
    variant: 'primary',
    onSelect: (date) => console.log('onSelect date:', date),
    lng: 'en',
    type: 'range',
  },
  parameters: figmaPrimaryDesign,
}

export const WithSingleDaySelected: Story = {
  args: {
    variant: 'primary',
    onSelect: (date) => console.log('onSelect date:', date),
    selected: new Date(2024, 1, 2),
    lng: 'en',
    type: 'single',
  },
  parameters: figmaPrimaryDesign,
}

export const WithRangeDateSelected: Story = {
  args: {
    variant: 'primary',
    onSelect: (date) => console.log('onSelect date:', date),
    selected: { from: new Date(2024, 1, 2), to: new Date(2024, 1, 12) },
    lng: 'en',
    type: 'range',
  },
  parameters: figmaPrimaryDesign,
}
