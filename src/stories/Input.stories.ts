import { Input } from '../atoms/Input'
import { StoryObj } from '@storybook/react'

const meta = {
  title: 'Design System/Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Optional label for the input',
    },
    placeholder: {
      description: 'Optional input placeholder text',
    },
    variant: {
      description: 'Input variant used',
    },
    disabled: {
      description: 'Is the input in disabled state?',
    },
    helpText: {
      description: 'Optional help text',
    },
    name: {
      description: 'Input name property',
    },
    type: {
      description: 'Input type property',
    },
    leftIcon: {
      description: 'Input left icon from a list of values',
    },
    id: {
      description: 'Value needed for the label relation',
    },
  },
}

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=68-211&mode=dev',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Email:',
    placeholder: 'Email...',
    variant: 'primary',
    disabled: false,
    helpText: 'This text can help you',
    name: 'email',
    type: 'email',
    id: 'email_input',
  },
  parameters: figmaPrimaryDesign,
}
