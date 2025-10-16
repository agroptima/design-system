import type { StoryObj } from '@storybook/nextjs'
import { ActionsMenu } from '../atoms/ActionsMenu'
import { PopoverMenuOption } from '../atoms/Popover'

const figmaDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/DN2ova21vWqCRvPspBXgI1/Design-System?node-id=165-815&m=dev',
  },
}

const meta = {
  title: 'Design System/Atoms/ActionsMenu',
  component: ActionsMenu,
  parameters: {
    docs: {
      description: {
        component:
          '<h2>Usage guidelines</h2>' +
          '<p>The <code>ActionsMenu</code> component is used to group and gather actions. This helps maintaining an organised UI.</p>' +
          '<ul>' +
          '  <li>Use it to group not so used actions</li>' +
          '  <li>On lists, the 3 more used actions should be presented as shortcuts and the rest of them grouped in an ActionsMenu</li>' +
          '  <li>Ensure all contained actions are clearly labeled and have the proper icon</li>' +
          '  <li>Pass actions as <code>PopoverMenuOption</code> components through the <code>children</code> prop</li>' +
          '</ul>',
      },
    },
    figmaDesign,
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      description: 'Position of the Popover component',
      control: { type: 'select' },
    },
    children: {
      description: 'PopoverMenuOption components are passed as children',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const WithLinks: Story = {
  render: () => (
    <ActionsMenu>
      <PopoverMenuOption
        active
        href="#"
        variant="primary"
        title="Save"
        leftIcon="Export"
      />
      <PopoverMenuOption
        href="#"
        variant="primary"
        title="Restart level"
        leftIcon="Export"
      />
      <PopoverMenuOption
        disabled
        href="#"
        variant="primary"
        title="Back to main menu"
        leftIcon="Export"
      />
    </ActionsMenu>
  ),
}

export const WithButtons: Story = {
  render: () => (
    <ActionsMenu>
      <PopoverMenuOption
        active
        onClick={() => alert('Save')}
        variant="primary"
        title="Save"
        leftIcon="Export"
      />
      <PopoverMenuOption
        onClick={() => alert('Restart level')}
        variant="primary"
        title="Restart level"
        leftIcon="Export"
      />
      <PopoverMenuOption
        disabled
        onClick={() => alert('Back to main menu')}
        variant="primary"
        title="Back to main menu"
        leftIcon="Export"
      />
    </ActionsMenu>
  ),
}
