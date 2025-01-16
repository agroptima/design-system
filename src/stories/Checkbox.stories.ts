import type { StoryObj } from '@storybook/react'
import { Checkbox } from '../atoms/Checkbox'

const meta = {
  title: 'Design System/Atoms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    accessibilityLabel: {
      description: 'Accessible name & description of the element',
    },
    variant: {
      description: 'Variant used from a list of values',
    },
    disabled: {
      description: 'Is the component in disabled state?',
    },
    label: {
      description: 'Label for the component',
    },
    id: {
      description: 'Value needed for the label relation',
    },
  },
}

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=521-104&mode=dev',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    accessibilityLabel: 'Marks if the user likes videogames',
    variant: 'primary',
    disabled: false,
    label: 'Do you like videogames?',
    id: 'checkbox-videogames-preference',
  },
  parameters: figmaPrimaryDesign,
}

export const PrimaryWithoutLabel: Story = {
  args: {
    accessibilityLabel: 'Marks if the user likes videogames',
    variant: 'primary',
    disabled: false,
    label: 'Do you like videogames?',
    id: 'checkbox-videogames-preference',
    hideLabel: true,
  },
  parameters: figmaPrimaryDesign,
}

export const Indeterminate: Story = {
  args: {
    accessibilityLabel: 'Marks if the user likes videogames',
    variant: 'primary',
    disabled: false,
    label: 'Do you like videogames?',
    id: 'checkbox-videogames-preference',
    indeterminate: true,
  },
  parameters: figmaPrimaryDesign,
}

export const Disabled: Story = {
  args: {
    accessibilityLabel: 'Marks if the user likes videogames',
    variant: 'primary',
    disabled: true,
    label: 'Do you like videogames?',
    id: 'checkbox-videogames-preference',
  },
  parameters: figmaPrimaryDesign,
}
