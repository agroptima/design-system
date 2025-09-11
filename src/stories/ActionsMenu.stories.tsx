import type { StoryObj } from '@storybook/react'
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
          '<p>The <code>ButtonGroup</code> component is used to visually group two or more buttons on a single horizontal line. This helps indicate related actions and maintain consistent UI alignment.</p>' +
          '<ul>' +
          '  <li>Use to group related actions that should be presented together</li>' +
          '  <li>Use for things like filter options, segmented controls, or inline actions</li>' +
          '  <li>Ensure all buttons in the group are accessible and clearly labeled</li>' +
          '  <li>Pass buttons through the <code>children</code> prop as an array or fragment</li>' +
          '  <li>Do not include unrelated controls like inputs or toggles in the same group</li>' +
          '</ul>',
      },
    },
    figmaDesign,
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'prop is used to pass buttons components.',
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
