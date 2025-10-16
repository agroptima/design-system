import type { StoryObj } from '@storybook/nextjs'
import { QuantitySelector } from '../atoms/QuantitySelector'

const meta = {
  title: 'Design System/Atoms/QuantitySelector',
  component: QuantitySelector,
  parameters: {
    docs: {
      description: {
        component:
          '<h2>Usage guidelines</h2>' +
          '<p>Quantity Selector component is similar to text inputs, but is used to specify only a numeric value. Quantity Selector incrementally increases or decreases the value with a two-segment control.</p>' +
          '<p>When using keyboard controls, increment and decrement buttons are ignored so the user is taken to the quantity input.</p>',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Label for the component',
    },
    accessibilityLabel: {
      description:
        'Describes the component purpose. If empty, label content will be used',
    },
    variant: {
      description: 'Component variant used',
    },
    disabled: {
      description: 'Is the input in disabled state?',
    },
    name: {
      description: 'Component name property',
    },
    id: {
      description: 'Value needed for the label relation',
    },
    decrementButton: {
      description: 'Button component props for decrementButton',
    },
    incrementButton: {
      description: 'Button component props for incrementButton',
    },
    quantityInput: {
      description: 'Input component props for quantityInput',
    },
    required: {
      description: 'Is required?',
      type: 'boolean',
    },
    fullWidth: {
      description:
        'Makes the QuantitySelector take the full width of the container',
      type: 'boolean',
    },
  },
}

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/DN2ova21vWqCRvPspBXgI1/Design-System?node-id=2701-275&m=dev',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Quantity',
    accessibilityLabel: 'Quantity of items to wishlist',
    id: 'quantity',
    hideLabel: true,
    name: 'quantity',
    max: 10,
    step: 0.0001,
    min: 1,
    required: true,
    defaultValue: 1,
  },
  parameters: figmaPrimaryDesign,
}

export const Disabled: Story = {
  args: {
    label: 'Quantity',
    accessibilityLabel: 'Quantity of items to wishlist',
    id: 'quantity',
    name: 'quantity',
    defaultValue: 1,
    onChange: () => alert('onChange'),
    max: 10,
    step: 0.0001,
    min: 1,
    required: true,
    disabled: true,
  },
  parameters: figmaPrimaryDesign,
}
