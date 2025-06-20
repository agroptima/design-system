import type { StoryObj } from '@storybook/react'
import { DateRangePicker } from '../atoms/DatePicker/DateRangePicker'

const meta = {
  title: 'Design System/Atoms/DateRangePicker',
  component: DateRangePicker,
  parameters: {
    docs: {
      description: {
        component:
          '<h2>Usage guidelines</h2>' +
          '<p>DateRangePicker component allows users to select past, present, or future dates in a visual way in range or single format. To avoid problems with Chromatic builds, always add a defaultValue.</p>',
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
      description: 'Optional parametre for required pick date',
    },
    className: {
      description: 'Optional parametre for add styles by className',
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

export const WithDateRangeSelected: Story = {
  args: {
    variant: 'primary',
    onSelect: (date) => console.log('onSelect date:', date),
    defaultValue: { from: '2024-01-02', to: '2024-01-12' },
    lng: 'en',
  },
  parameters: figmaPrimaryDesign,
}

export const DateRangePickerWithInput: Story = {
  args: {
    variant: 'primary',
    onSelect: (date) => console.log('onSelect date:', date),
    defaultValue: { from: '2024-01-02', to: '2024-01-12' },
    lng: 'en',
    withInput: true,
  },
  parameters: figmaPrimaryDesign,
}

export const DateRangePickerWithErrors: Story = {
  args: {
    variant: 'primary',
    onSelect: (date) => console.log('onSelect date:', date),
    lng: 'en',
    defaultValue: { from: '2024-01-02', to: '2024-01-12' },
    errors: ['Date is required', 'Another error'],
  },
  parameters: figmaPrimaryDesign,
}
