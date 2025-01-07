import type { StoryObj } from '@storybook/react'
import { TextArea } from '../atoms/TextArea'

const meta = {
  title: 'Design System/Atoms/Textarea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Label for the textarea',
    },
    accessibilityLabel: {
      description:
        'Describes the textarea purpose. If empty, label content will be used',
    },
    placeholder: {
      description: 'Optional textarea placeholder text',
    },
    variant: {
      description: 'Textarea variant used',
    },
    disabled: {
      description: 'Is the textarea in disabled state?',
    },
    helpText: {
      description: 'Optional help text',
    },
    name: {
      description: 'Textarea name property',
    },
    id: {
      description: 'Value needed for the label relation',
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
    url: 'https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=2371-2157&mode=dev',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Textarea',
    accessibilityLabel: 'Fill the textarea',
    placeholder: 'Write here...',
    variant: 'primary',
    disabled: false,
    helpText: 'This text can help you',
    name: 'textarea',
    id: 'textarea',
  },
  parameters: figmaPrimaryDesign,
}

export const WithErrors: Story = {
  args: {
    label: 'Textarea',
    accessibilityLabel: 'Fill the form textarea',
    placeholder: 'Write here...',
    variant: 'primary',
    disabled: false,
    helpText: 'This text can help you',
    name: 'textarea',
    id: 'textarea',
    errors: ['Che che che', 'Another error'],
  },
  parameters: figmaPrimaryDesign,
}
