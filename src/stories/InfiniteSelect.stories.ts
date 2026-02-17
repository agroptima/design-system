import type { StoryObj } from '@storybook/nextjs'
import { clear } from 'console'
import {
  InfiniteSelect,
  type InfiniteSelectProps,
} from '../atoms/Select/InfiniteSelect'

type Item = { uid: string; name: string }

const fakeQuery: InfiniteSelectProps<Item>['query'] = async ({
  page = '1',
  search,
}) => {
  const pages: Record<string, Item[]> = {
    '1': [
      { uid: '1', name: 'Nintendo Switch' },
      { uid: '2', name: 'PlayStation 5' },
      { uid: '3', name: 'Xbox Series S/X' },
      { uid: '4', name: 'PC' },
      { uid: '5', name: 'Mobile' },
      { uid: '6', name: 'VR Headset' },
      { uid: '7', name: 'Retro Console' },
      { uid: '8', name: 'Handheld Console' },
      { uid: '9', name: 'Arcade Machine' },
      { uid: '10', name: 'Streaming Device' },
    ],
    '2': [
      { uid: '11', name: 'Gaming Laptop' },
      { uid: '12', name: 'Smart TV' },
      { uid: '13', name: 'Tablet' },
      { uid: '14', name: 'Smartphone' },
      { uid: '15', name: 'Cloud Gaming Service' },
      { uid: '16', name: 'Emulator' },
      { uid: '17', name: 'Gaming Monitor' },
      { uid: '18', name: 'Gaming Chair' },
      { uid: '19', name: 'Gaming Headset' },
      { uid: '20', name: 'Gaming Keyboard' },
    ],
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ items: pages[page] || [], totalPages: 2 })
    }, 1000)
  })
}

const meta = {
  title: 'Design System/Atoms/InfiniteSelect',
  component: InfiniteSelect,
  parameters: {
    docs: {
      description: {
        component:
          '<h2>Usage guidelines</h2>' +
          '<p>Use the infinite select component within a form where users select from a list that loads the data as they scroll, select and option and submit the data.</p>' +
          '<ul>' +
          ' <li>Include a label</li>' +
          ' <li>Include a placeholder</li>' +
          ' <li>Keep menu items concise</li>' +
          ' <li>Mark the minority of pickers in a form as required or optional</li>' +
          ' <li>Use help text to show context</li>' +
          ' <li>Switch help text with error text</li>' +
          ' <li>Write error text that shows a solution</li>' +
          ' <li>Include a search input</li>' +
          '</ul>',
      },
    },
  },
  tags: ['autodocs', 'Data entry components'],
  argTypes: {
    id: {
      description: 'Set id property',
    },
    name: {
      description: 'Set name property',
    },
    label: {
      description: 'Label for the infinite select',
    },
    placeholder: {
      description: 'Set select placeholder text',
    },
    searchLabel: {
      description: 'Label for the search input',
    },
    helpText: {
      description: 'Optional help text',
    },
    required: {
      description: 'Is required?',
      type: 'boolean',
    },
    disabled: {
      description: 'Is the select in disabled state?',
    },
    variant: {
      description: 'Component variant used',
    },
    className: {
      description: 'Additional class names to apply to the component',
    },
    defaultValue: {
      description: 'Value to be displayed as selected',
    },
    displayItem: {
      description: 'Function to display the item in the select',
    },
    hideLabel: {
      description: 'Show or hide label?',
    },
    clearAccessibilityLabel: {
      description: 'Accessibility label for the clear button',
    },
    loadingAccessibilityLabel: {
      description: 'Accessibility label for the loading state',
    },
    query: {
      description: 'Function to query the items',
      table: {
        type: {
          summary:
            '(payload: Payload) => Promise<{ items: T[]; totalPages: number }>',
        },
      },
    },
  },
}

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/DN2ova21vWqCRvPspBXgI1/Design-System?type=design&node-id=188-1956&mode=dev',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    id: 'select-videogames',
    name: 'example',
    helpText: 'This text can help you',
    label: 'Videogames',
    placeholder: 'Select your favourite gaming system...',
    searchLabel: 'Search videogames',
    clearAccessibilityLabel: 'Clear selected option',
    loadingAccessibilityLabel: 'Loading options',
    disabled: false,
    required: true,
    displayItem: (item: { uid: string; name?: string }) => {
      return item.name || ''
    },
    query: fakeQuery,
    onChange: (value) => {
      console.log('selected', value)
    },
  },
  parameters: figmaPrimaryDesign,
}

export const PrimaryWithSelectedOptions: Story = {
  args: {
    id: 'select-videogames',
    name: 'example',
    helpText: 'This text can help you',
    label: 'Videogames',
    placeholder: 'Select your favourite gaming system...',
    searchLabel: 'Search videogames',
    clearAccessibilityLabel: 'Clear selected option',
    loadingAccessibilityLabel: 'Loading options',
    disabled: false,
    required: true,
    defaultValue: { uid: '1', name: 'Nintendo Switch' } as Item,
    displayItem: (item: { uid: string; name?: string }) => {
      return item.name || ''
    },
    query: fakeQuery,
  },
  parameters: figmaPrimaryDesign,
}
