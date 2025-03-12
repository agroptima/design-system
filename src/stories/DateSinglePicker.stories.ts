import type { StoryObj } from '@storybook/react'
import { DateSinglePicker } from '../atoms/DatePicker/DateSinglePicker'

const meta = {
  title: 'Design System/Atoms/DateSinglePicker',
  component: DateSinglePicker,
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
    required: {
      description: 'Optional parametre for required pick date',
    },
    className: {
      description: 'Optional parametre for add styles by className',
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
  },
}

export const WithSingleDaySelected: Story = {
  args: {
    variant: 'primary',
    onSelect: (date) => console.log('onSelect date:', date),
    defaultValue: '2024-01-20',
    lng: 'en',
  },
  parameters: figmaPrimaryDesign,
}
