import type { StoryObj } from '@storybook/react'
import { DateRangePicker } from '../atoms/DatePicker/DateRangePicker'

const meta = {
  title: 'Design System/Atoms/DateRangePicker',
  component: DateRangePicker,
  parameters: {
    docs: {
      description: {
        component:
          '<h2>Usage guidelines</h2><p>DateRangePicker component allows users to select past, present, or future dates in a visual way in range or single format.</p>',
      },
    },
  },
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
    required: {
      description: 'Optional parametre for required pick date',
    },
    className: {
      description: 'Optional parametre for add className',
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

export const RangeDatePicker: Story = {
  args: {
    variant: 'primary',
    onSelect: (date) => console.log('onSelect date:', date),
    lng: 'en',
  },
  parameters: figmaPrimaryDesign,
}

export const WithRangeDateSelected: Story = {
  args: {
    variant: 'primary',
    onSelect: (date) => console.log('onSelect date:', date),
    defaultValue: { from: '2024-01-02', to: '2024-01-12' },
    lng: 'en',
  },
  parameters: figmaPrimaryDesign,
}
