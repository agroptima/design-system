import type { StoryObj } from '@storybook/nextjs'
import { InputWithSelect } from '../atoms/InputWithSelect'

const meta = {
  title: 'Design System/Atoms/InputWithSelect',
  component: InputWithSelect,
  parameters: {
    docs: {
      description: {
        component:
          '<h2>Usage guidelines</h2>' +
          '<p>The InputWithSelect component is used when the value the user types needs a unit or symbol attached to it, such as a percentage or a measurement. It combines an input field with a compact select fused into the same field, placed as a suffix.</p>' +
          '<ul>' +
          '  <li>Use when the unit is closely tied to the value and only a short, fixed list of symbols applies (e.g. %, kg, m²)</li>' +
          '  <li>Keep the list of options short, these are not meant to be searched</li>' +
          '  <li>Always include a visible label and a select accessibility label</li>' +
          '  <li>Support help and error text as in a standard input</li>' +
          '</ul>',
      },
    },
  },
  tags: ['autodocs', 'Data entry components'],
  argTypes: {
    label: {
      description: 'Label for the input',
    },
    helpText: {
      description: 'Optional help text',
    },
    name: {
      description: 'Set name property for the input value',
    },
    selectFieldName: {
      description:
        'Set name property for the hidden input holding the selected option, if it needs to be submitted in a form',
    },
    options: {
      description: 'Array of symbols/units to be displayed on the select',
    },
    defaultSelectedOption: {
      description: 'Option id to be selected by default',
    },
    onSelectChange: {
      description: 'Called with the selected option id when it changes',
    },
    selectAccessibilityLabel: {
      description: 'Describes the select purpose for screen readers',
    },
    errors: {
      description:
        'Optional array of errors. If passed, the errors are listed and invalid style is applied.',
    },
    disabled: {
      description: 'Is the field in disabled state?',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Weight',
    name: 'weight',
    type: 'number',
    defaultValue: 10,
    helpText: 'This text can help you',
    selectAccessibilityLabel: 'Select weight unit',
    options: [
      { id: 'kg', label: 'kg' },
      { id: 'g', label: 'g' },
      { id: 'lb', label: 'lb' },
    ],
    id: 'weight',
  },
}

export const WithErrors: Story = {
  args: {
    ...Primary.args,
    errors: ['Weight must be greater than 0'],
  },
}

export const Disabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
  },
}
