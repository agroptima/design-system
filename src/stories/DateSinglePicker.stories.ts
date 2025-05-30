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
    name: {
      description: 'Optional parameter for custom name input',
    },
    required: {
      description: 'Optional parameter to require selecting a date',
    },
    className: {
      description: 'Optional parameter to add styles by className',
    },
    withInput: {
      description: 'Optional input to read and select the date',
      control: {
        type: 'boolean',
        default: false,
      },
    },
    label: {
      description: 'Optional label for input',
      control: {
        type: 'string',
        default: 'Date',
      },
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

export const WithSingleDateSelected: Story = {
  args: {
    variant: 'primary',
    onSelect: (date) => console.log('onSelect date:', date),
    defaultValue: '2024-01-20',
    lng: 'en',
  },
  parameters: figmaPrimaryDesign,
}

export const SingleDatePickerWithInput: Story = {
  args: {
    variant: 'primary',
    onSelect: (date) => console.log('onSelect date:', date),
    defaultValue: '2024-01-20',
    lng: 'en',
    withInput: true,
  },
  parameters: figmaPrimaryDesign,
}

export const SingleDatePickerWithErrors: Story = {
  args: {
    variant: 'primary',
    onSelect: (date) => console.log('onSelect date:', date),
    defaultValue: '2024-01-20',
    lng: 'en',
    errors: ['Date is required', 'Another error'],
  },
  parameters: figmaPrimaryDesign,
}
