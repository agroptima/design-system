import { Input } from '../atoms/Input'
import type { StoryObj } from '@storybook/react'

const meta = {
  title: 'Design System/Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Label for the input',
    },
    accessibilityLabel: {
      description:
        'Describes the input purpose. If empty, label content will be used',
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
    icon: {
      description: 'Input left icon from a list of values',
    },
    id: {
      description: 'Value needed for the label relation',
    },
    suffix: {
      description: 'Input suffix',
    },
    errors: {
      description:
        'Optional array of errors. If passed, the errors are listed and invalid style is applied.',
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
    label: 'Email',
    accessibilityLabel: 'Fill the form email',
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

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Password...',
    variant: 'primary',
    disabled: false,
    helpText: 'This text can help you',
    name: 'login_password',
    type: 'password',
    id: 'password_input',
  },
  parameters: figmaPrimaryDesign,
}

export const File: Story = {
  args: {
    label: 'Label for input file',
    variant: 'primary',
    disabled: false,
    helpText: 'This text can help you',
    name: 'file',
    type: 'file',
  },
  parameters: figmaPrimaryDesign,
}

export const WithErrors: Story = {
  args: {
    label: 'Email',
    accessibilityLabel: 'Fill the form email',
    placeholder: 'Email...',
    variant: 'primary',
    disabled: false,
    helpText: 'This text can help you',
    name: 'email',
    type: 'email',
    id: 'email_input',
    errors: ['error1', 'error2'],
  },
  parameters: figmaPrimaryDesign,
}

export const WithSuffix: Story = {
  args: {
    label: 'Input with suffix',
    helpText: 'This text can help you',
    name: 'price',
    type: 'number',
    suffix: '€/Bottle',
  },
  parameters: figmaPrimaryDesign,
}
