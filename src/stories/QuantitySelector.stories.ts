import { QuantitySelector } from '../atoms/QuantitySelector'
import { StoryObj } from '@storybook/react'

const meta = {
  title: 'Design System/Atoms/QuantitySelector',
  component: QuantitySelector,
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
    id: 'quantity-selector',
    decrementButton: {
      label: '-',
      onClick: () => alert('decrement'),
    },
    incrementButton: {
      label: '+',
      onClick: () => alert('increment'),
    },
    quantityInput: {
      label: 'Quantity input',
      hideLabel: true,
      name: 'quantity',
      value: 1,
      onChange: () => alert('onChange'),
      type: 'number',
      max: 10,
      step: 0.0001,
      min: 1,
      required: true,
    },
  },
  parameters: figmaPrimaryDesign,
}

export const Disabled: Story = {
  args: {
    label: 'Quantity',
    accessibilityLabel: 'Quantity of items to wishlist',
    id: 'quantity-selector',
    decrementButton: {
      label: '-',
      onClick: () => alert('decrement'),
      disabled: true,
    },
    incrementButton: {
      label: '+',
      onClick: () => alert('increment'),
      disabled: true,
    },
    quantityInput: {
      label: 'Quantity input',
      hideLabel: true,
      name: 'quantity',
      value: 1,
      onChange: () => alert('onChange'),
      type: 'number',
      max: 10,
      step: 0.0001,
      min: 1,
      required: true,
      disabled: true,
    },
  },
  parameters: figmaPrimaryDesign,
}
