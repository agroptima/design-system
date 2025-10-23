import type { StoryObj } from '@storybook/nextjs'
import { RadioGroup } from '../atoms/RadioGroup'

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/DN2ova21vWqCRvPspBXgI1/Design-System?node-id=527-73&m=dev',
  },
}

const meta = {
  title: 'Design System/Atoms/RadioGroup',
  component: RadioGroup,
  parameters: {
    docs: {
      description: {
        component:
          '<h2>Usage guidelines</h2>' +
          '<p>Radio group component allows a user to select only one value from several options. Radio options should not be too many because all the options are default visible to a user so that the user can make the selection via comparison.</p>' +
          '<ul>' +
          ' <li>Always label radio groups</li>' +
          ' <li>Radio buttons and checkboxes are not interchangeable.</li>' +
          '</ul>',
      },
    },
    figmaPrimaryDesign,
  },
  tags: ['autodocs', 'Data entry components'],
  argTypes: {
    onChange: {
      description: 'Function onChange',
    },
    variant: {
      description: 'Variant used from a list of values',
    },
    label: {
      description: 'Label for the component',
    },
    required: {
      description: 'Is required?',
      type: 'boolean',
    },
    disabled: {
      description: 'Is the component in disabled state?',
      type: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Select your videogame preference',
    name: 'videogames-preference',
    helpText: 'This is a help text',
    onChange: (itemId) => {
      console.log('onChange itemId', itemId)
    },
    options: [
      { label: 'Action games', value: 'action' },
      { label: 'Party games', value: 'party' },
      { label: 'Platform games', value: 'platform' },
    ],
  },
  parameters: figmaPrimaryDesign,
}

export const Enabled = {
  args: {
    label: 'Select your videogame preference',
    name: 'videogames-preference',
    required: true,
    options: [
      { label: 'Action games', value: 'action' },
      { label: 'Party games', value: 'party' },
      { label: 'Platform games', value: 'platform' },
    ],
  },
  parameters: figmaPrimaryDesign,
}

export const Disabled = {
  args: {
    label: 'Select your videogame preference',
    name: 'videogames-preference',
    disabled: true,
    options: [
      { label: 'Action games', value: 'action' },
      { label: 'Party games', value: 'party' },
      { label: 'Platform games', value: 'platform' },
    ],
  },
  parameters: figmaPrimaryDesign,
}

export const WithDefaultValue = {
  args: {
    label: 'Select your videogame preference',
    name: 'videogames-preference',
    defaultValue: 'action',
    options: [
      { label: 'Action games', value: 'action' },
      { label: 'Party games', value: 'party' },
      { label: 'Platform games', value: 'platform' },
    ],
  },
  parameters: figmaPrimaryDesign,
}

export const WithErrors = {
  args: {
    label: 'Select your videogame preference',
    name: 'videogames-preference',
    helpText: 'This is a help text',
    errors: ['This is an error message'],
    options: [
      { label: 'Action games', value: 'action' },
      { label: 'Party games', value: 'party' },
      { label: 'Platform games', value: 'platform' },
    ],
  },
  parameters: figmaPrimaryDesign,
}
