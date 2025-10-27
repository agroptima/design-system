import type { StoryObj } from '@storybook/nextjs'
import { TextArea } from '../atoms/TextArea'

const meta = {
  title: 'Design System/Atoms/Textarea',
  component: TextArea,
  parameters: {
    docs: {
      description: {
        component:
          '<h2>Usage guidelines</h2>' +
          '<p>A text area component lets a user input a longer amount of text than a standard text field.</p>' +
          '<ul>' +
          ' <li>Include a label</li><li>Mark the minority of text areas in a form as required or optional</li>' +
          ' <li>Because text areas are typically taller and wider than other components, it’s important to include the background of the field in order to help a user know where to click or tap to start entering text</li>' +
          ' <li>Use help text to show hints, formatting, and requirements</li>' +
          ' <li>Switch help text with error text</li>' +
          ' <li>Write error text that shows a solution</li>' +
          '</ul>',
      },
    },
  },
  tags: ['autodocs', 'Data entry components'],
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
    required: {
      description: 'Is required?',
      type: 'boolean',
    },
    errors: {
      description:
        'Optional array of errors. If passed, the errors are listed and invalid style is applied.',
    },
    fullWidth: {
      description: 'Makes the TextArea take the full width of the container',
      type: 'boolean',
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
