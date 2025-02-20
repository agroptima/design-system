import type { StoryObj } from '@storybook/react'
import { Switch } from '../atoms/Switch'

const meta = {
  title: 'Design System/Atoms/Switch',
  component: Switch,
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
    size: {
      description: 'Medium or small sizes available',
    },
    hideLabel: {
      description: 'Show or hide label?',
    },
  },
}

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/DN2ova21vWqCRvPspBXgI1/Design-System?node-id=3854-81&t=Hb5zHVDMclLNXeS6-4',
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
    id: 'switch-videogames-preference',
    onClick: (e) =>
      console.log('onClick: ', (e.target as HTMLInputElement).checked),
  },
  parameters: figmaPrimaryDesign,
}

export const PrimaryWithoutLabel: Story = {
  args: {
    accessibilityLabel: 'Marks if the user likes videogames',
    variant: 'primary',
    disabled: false,
    label: 'Do you like videogames?',
    id: 'switch-videogames-preference',
    hideLabel: true,
    onClick: (e) =>
      console.log('onClick: ', (e.target as HTMLInputElement).checked),
  },
  parameters: figmaPrimaryDesign,
}

export const Disabled: Story = {
  args: {
    accessibilityLabel: 'Marks if the user likes videogames',
    variant: 'primary',
    disabled: true,
    label: 'Do you like videogames?',
    id: 'switch-videogames-preference',
  },
  parameters: figmaPrimaryDesign,
}

export const Small: Story = {
  args: {
    accessibilityLabel: 'Marks if the user likes videogames',
    variant: 'primary',
    disabled: false,
    label: 'Do you like videogames?',
    id: 'switch-videogames-preference',
    onClick: (e) =>
      console.log('onClick: ', (e.target as HTMLInputElement).checked),
    size: 'small',
  },
  parameters: figmaPrimaryDesign,
}
