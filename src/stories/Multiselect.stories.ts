import { Multiselect } from '../atoms/Multiselect'
import { StoryObj } from '@storybook/react'

const meta = {
  title: 'Design System/Atoms/Multiselect',
  component: Multiselect,
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Label for the select',
    },
    accessibilityLabel: {
      description:
        'Describes the select purpose. If empty, label content will be used',
    },
    selectedLabel: {
      description: 'Label used when having selected values',
    },
    variant: {
      description: 'Select variant used',
    },
    disabled: {
      description: 'Is the select in disabled state?',
    },
    invalid: {
      description: 'Is the select in disabled state?',
    },
    helpText: {
      description: 'Optional help text',
    },
    name: {
      description: 'Set name property',
    },
    placeholder: {
      description: 'Set select placeholder text',
    },
    options: {
      description: 'Array of values to be displayed on the select list',
    },
    selected: {
      description: 'Array of values to be displayed as selected',
    },
  },
}

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=454-1657&mode=dev',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    disabled: false,
    invalid: false,
    hideLabel: false,
    helpText: 'This text can help you',
    name: 'example',
    label: 'Videogames',
    accessibilityLabel: 'Select your favourite videogames options',
    selectedLabel: 'videogames selected',
    placeholder: 'Select your favourite videogames...',
    options: [
      { id: '1', label: 'The Legend of Zelda: Ocarina of Time' },
      { id: '2', label: 'Spyro the Dragon' },
      { id: '3', label: 'Halo' },
      { id: '4', label: 'Tetris' },
      { id: '5', label: 'Super Mario Bros' },
      { id: '6', label: 'Red Dead Redemption' },
    ],
    id: 'multiselect-videogames',
  },
  parameters: figmaPrimaryDesign,
}

export const PrimaryWithSelectedOptions: Story = {
  args: {
    variant: 'primary',
    disabled: false,
    invalid: false,
    hideLabel: false,
    helpText: 'This text can help you',
    name: 'example',
    label: 'Videogames',
    selectedLabel: 'videogames selected',
    placeholder: 'Select your favourite videogames...',
    options: [
      { id: '1', label: 'The Legend of Zelda: Ocarina of Time' },
      { id: '2', label: 'Spyro the Dragon' },
      { id: '3', label: 'Halo' },
      { id: '4', label: 'Tetris' },
      { id: '5', label: 'Super Mario Bros' },
      { id: '6', label: 'Red Dead Redemption' },
    ],
    selected: [
      { id: '2', label: 'Spyro the Dragon' },
      { id: '1', label: 'The Legend of Zelda: Ocarina of Time' },
    ],
    id: 'multiselect-videogames',
  },
  parameters: figmaPrimaryDesign,
}
