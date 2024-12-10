import { Select } from '../atoms/Select'
import type { StoryObj } from '@storybook/react'

const meta = {
  title: 'Design System/Atoms/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Label for the select',
    },
    accessibilityLabel: {
      description:
        'Describes the select purpose. If empty, label content will be used',
    },
    variant: {
      description: 'Select variant used',
    },
    disabled: {
      description: 'Is the select in disabled state?',
    },
    invalid: {
      description: 'Is the select in disabled state?',
    },
    helpText: {
      description: 'Optional help text',
    },
    name: {
      description: 'Set name property',
    },
    placeholder: {
      description: 'Set select placeholder text',
    },
    options: {
      description: 'Array of values to be displayed on the select list',
    },
    defaultValue: {
      description: 'Value to be displayed as selected',
    },
    errors: {
      description:
        'Optional array of errors. If passed, the errors are listed and invalid style is applied.',
    },
    isSearchable: {
      description: 'Select component with search option',
    },
    searchLabel: {
      description: 'Label for the search ',
    },
  },
}

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=188-1956&mode=dev',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    disabled: false,
    helpText: 'This text can help you',
    name: 'example',
    label: 'Videogames',
    accessibilityLabel: 'Select your favourite gaming system options',
    hideLabel: false,
    isSearchable: false,
    placeholder: 'Select your favourite gaming system...',
    options: [
      { id: '1', label: 'Nintendo Switch' },
      { id: '2', label: 'PlayStation 5' },
      { id: '3', label: 'Xbox Series S/X' },
      { id: '4', label: 'PC' },
      { id: '5', label: 'Mobile' },
      { id: '6', label: 'PlayStation 4' },
      { id: '7', label: 'Xbox One' },
      { id: '8', label: 'PlayStation 3' },
      { id: '9', label: 'Xbox 360' },
      { id: '10', label: 'PlayStation 2' },
      { id: '11', label: 'Xbox' },
      { id: '12', label: 'PlayStation' },
      { id: '13', label: 'Nintendo 64' },
      { id: '14', label: 'Super Nintendo' },
      { id: '15', label: 'Sega Genesis' },
      { id: '16', label: 'Sega Saturn' },
      { id: '17', label: 'Sega Dreamcast' },
      { id: '18', label: 'Atari 2600' },
    ],
    id: 'select-videogames',
    onChange: (optionId) => console.log('onChange optionId:', optionId),
    required: true,
  },
  parameters: figmaPrimaryDesign,
}

export const PrimaryWithSelectedOptions: Story = {
  args: {
    variant: 'primary',
    disabled: false,
    helpText: 'This text can help you',
    name: 'example',
    label: 'Videogames',
    hideLabel: false,
    placeholder: 'Select your favourite gaming system...',
    isSearchable: false,
    options: [
      { id: '1', label: 'Nintendo Switch' },
      { id: '2', label: 'PlayStation 5' },
      { id: '3', label: 'Xbox Series S/X' },
    ],
    defaultValue: '2',
    id: 'select-videogames',
  },
  parameters: figmaPrimaryDesign,
}

export const PrimaryWithErrors: Story = {
  args: {
    variant: 'primary',
    disabled: false,
    helpText: 'This text can help you',
    name: 'example',
    label: 'Videogames',
    accessibilityLabel: 'Select your favourite gaming system options',
    hideLabel: false,
    placeholder: 'Select your favourite gaming system...',
    isSearchable: false,
    options: [
      { id: '1', label: 'Nintendo Switch' },
      { id: '2', label: 'PlayStation 5' },
      { id: '3', label: 'Xbox Series S/X' },
    ],
    id: 'select-videogames',
    errors: ['error1', 'error2'],
    onChange: (optionId) => console.log('onChange optionId:', optionId),
  },
  parameters: figmaPrimaryDesign,
}

export const PrimaryWithSearch: Story = {
  args: {
    variant: 'primary',
    disabled: false,
    helpText: 'This text can help you',
    name: 'example',
    label: 'Videogames',
    accessibilityLabel: 'Select your favourite gaming system options',
    hideLabel: false,
    placeholder: 'Select your favourite gaming system...',
    options: [
      { id: '1', label: 'Nintendo Switch' },
      { id: '2', label: 'PlayStation 5' },
      { id: '3', label: 'Xbox Series S/X' },
      { id: '4', label: 'PC' },
      { id: '5', label: 'Mobile' },
      { id: '6', label: 'PlayStation 4' },
      { id: '7', label: 'Xbox One' },
      { id: '8', label: 'PlayStation 3' },
      { id: '9', label: 'Xbox 360' },
      { id: '10', label: 'PlayStation 2' },
      { id: '11', label: 'Xbox' },
      { id: '12', label: 'PlayStation' },
      { id: '13', label: 'Nintendo 64' },
      { id: '14', label: 'Super Nintendo' },
      { id: '15', label: 'Sega Genesis' },
      { id: '16', label: 'Sega Saturn' },
      { id: '17', label: 'Sega Dreamcast' },
      { id: '18', label: 'Atari 2600' },
    ],
    id: 'select-videogames',
    onChange: (optionId) => console.log('onChange optionId:', optionId),
    isSearchable: true,
    searchLabel: 'Search',
  },
  parameters: figmaPrimaryDesign,
}
