import type { StoryObj } from '@storybook/react'
import { Multiselect } from '../atoms/Select/MultiSelect'

const meta = {
  title: 'Design System/Atoms/Multiselect',
  component: Multiselect,
  parameters: {
    docs: {
      description: {
        component:
          '<h2>Usage guidelines</h2>' +
          '<p>When there are more than a few options to choose from, you can wrap them in a Multiselect component. By clicking on the trigger, a menu will appear, which allows you to choose an option and execute the relevant action.</p>' +
          '<ul>' +
          ' <li>By default, include a label</li><li>Mark the minority of components in a form as required or optional</li>' +
          ' <li>Use help text to show hints, formatting, and requirements</li>' +
          ' <li>Switch help text with error text</li>' +
          ' <li>Write error text that shows a solution</li>' +
          '</ul>',
      },
    },
  },
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
    defaultValue: {
      description: 'Array of ids to be displayed as selected',
    },
    errors: {
      description:
        'Optional array of errors. If passed, the errors are listed and invalid style is applied.',
    },
    isSearchable: {
      description: 'Select component with search option',
    },
    searchLabel: {
      description: 'Label for the search ',
    },
    required: {
      description: 'Is required?',
      type: 'boolean',
    },
    fullWidth: {
      description: 'Makes the Multiselect take the full width of the container',
      type: 'boolean',
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
    hideLabel: false,
    helpText: 'This text can help you',
    name: 'videogames',
    label: 'Videogames',
    accessibilityLabel: 'Select your favourite videogames options',
    selectedLabel: 'videogames selected',
    placeholder: 'Select your favourite videogames...',
    isSearchable: false,
    options: [
      { id: '1', label: 'The Legend of Zelda: Ocarina of Time' },
      { id: '2', label: 'Spyro the Dragon' },
      { id: '3', label: 'Halo' },
      { id: '4', label: 'Tetris' },
      { id: '5', label: 'Super Mario Bros' },
      { id: '6', label: 'Red Dead Redemption' },
    ],
  },
  parameters: figmaPrimaryDesign,
}

export const PrimaryWithSelectedOptions: Story = {
  args: {
    variant: 'primary',
    disabled: false,
    hideLabel: false,
    helpText: 'This text can help you',
    name: 'videogames',
    label: 'Videogames',
    selectedLabel: 'videogames selected',
    placeholder: 'Select your favourite videogames...',
    isSearchable: false,
    options: [
      { id: '1', label: 'The Legend of Zelda: Ocarina of Time' },
      { id: '2', label: 'Spyro the Dragon' },
      { id: '3', label: 'Halo' },
      { id: '4', label: 'Tetris' },
      { id: '5', label: 'Super Mario Bros' },
      { id: '6', label: 'Red Dead Redemption' },
    ],
    defaultValue: ['2', '1'],
  },
  parameters: figmaPrimaryDesign,
}

export const PrimaryWithErrors: Story = {
  args: {
    variant: 'primary',
    disabled: false,
    hideLabel: false,
    helpText: 'This text can help you',
    name: 'videogames',
    label: 'Videogames',
    accessibilityLabel: 'Select your favourite videogames options',
    selectedLabel: 'videogames selected',
    placeholder: 'Select your favourite videogames...',
    isSearchable: false,
    options: [
      { id: '1', label: 'The Legend of Zelda: Ocarina of Time' },
      { id: '2', label: 'Spyro the Dragon' },
      { id: '3', label: 'Halo' },
      { id: '4', label: 'Tetris' },
      { id: '5', label: 'Super Mario Bros' },
      { id: '6', label: 'Red Dead Redemption' },
    ],
    errors: ['error1', 'error2'],
  },
  parameters: figmaPrimaryDesign,
}
export const PrimaryWithSearch: Story = {
  args: {
    variant: 'primary',
    disabled: false,
    hideLabel: false,
    helpText: 'This text can help you',
    name: 'videogames',
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
    isSearchable: true,
    searchLabel: 'Search',
  },
  parameters: figmaPrimaryDesign,
}
