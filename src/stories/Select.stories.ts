import { Select } from '../atoms/Select'
import { StoryObj } from '@storybook/react'

const meta = {
  title: 'Design System/Atoms/Select',
  component: Select,
  tags: ['autodocs'],
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
    required: true,
    invalid: false,
    helpText: 'This text can help you',
    name: 'example',
    selectOptionText: 'Select your favourite gaming system...',
    options: [
      { id: '1', label: 'Nintendo Switch' },
      { id: '2', label: 'PlayStation 5' },
      { id: '3', label: 'Xbox Series S/X' },
    ],
  },
  parameters: figmaPrimaryDesign,
}
