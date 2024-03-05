import { EmptyState } from '../atoms/EmptyState'
import { StoryObj } from '@storybook/react'

const meta = {
  title: 'Design System/Atoms/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      description: 'A default icon is set for the empty state.',
    },
    text: {
      description: 'Label used to describe the empty state.',
    },
    variant: {
      description: 'Variant used.',
    },
    buttonLabel: {
      description: 'Label used on the button.',
    },
    action: {
      description: 'Action called when button is pressed.',
    },
  },
}

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=1719-258&mode=dev',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryCustom: Story = {
  args: {
    variant: 'primary',
    text: 'There are no videogames yet. You can import videogames to your list.',
    buttonLabel: 'Import videogames',
    action: (event) => console.log('click: ', event),
  },
  parameters: figmaPrimaryDesign,
}

export const PrimaryBasic: Story = {
  args: {
    variant: 'primary',
  },
  parameters: figmaPrimaryDesign,
}
