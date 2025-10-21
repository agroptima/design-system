import type { StoryObj } from '@storybook/nextjs'
import NextLink from 'next/link'
import { Checkbox } from '../atoms/Checkbox'

const meta = {
  title: 'Design System/Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component:
          '<h2>Usage guidelines</h2>' +
          '<p>Checkboxes are used for multiple choices, not for mutually exclusive choices.</p>' +
          '<ul>' +
          ' <li>When a checkbox represents multiple values that are not identical, the checkbox should appear in the indeterminate state</li>' +
          " <li>It's used on forms, filtering and batch actions and on terms and conditions agreement</li>" +
          '</ul>',
      },
    },
  },
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
    required: {
      description: 'Is required?',
      type: 'boolean',
    },
    hideLabel: {
      description: 'Show or hide label?',
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
    children: 'Do you like videogames?',
    id: 'checkbox-videogames-preference',
  },
  parameters: figmaPrimaryDesign,
}

export const PrimaryWithoutLabel: Story = {
  args: {
    accessibilityLabel: 'Marks if the user likes videogames',
    variant: 'primary',
    disabled: false,
    children: 'Do you like videogames?',
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
    children: 'Do you like videogames?',
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
    children: 'Do you like videogames?',
    id: 'checkbox-videogames-preference',
  },
  parameters: figmaPrimaryDesign,
}

export const WithLink: Story = {
  render: () => (
    <Checkbox
      accessibilityLabel="Marks if the user likes videogames"
      id="checkbox-videogames-preference"
      variant="primary"
    >
      Do you like <NextLink href="link.com">videogames</NextLink>?
    </Checkbox>
  ),
} as unknown as Story
