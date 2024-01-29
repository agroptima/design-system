import { Select } from '../atoms/Select'
import { StoryObj } from '@storybook/react'

const meta = {
  title: 'Design System/Atoms/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Label for the select',
    },
    variant: {
      description: 'Select variant used',
    },
    disabled: {
      description: 'Is the select in disabled state?',
    },
    required: {
      description: 'Is the select in required state?',
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
    required: false,
    invalid: false,
    helpText: 'This text can help you',
    name: 'example',
    label: 'Videogames',
    placeholder: 'Select your favourite gaming system...',
    options: [
      { id: '1', label: 'Nintendo Switch' },
      { id: '2', label: 'PlayStation 5' },
      { id: '3', label: 'Xbox Series S/X' },
    ],
  },
  parameters: figmaPrimaryDesign,
}
