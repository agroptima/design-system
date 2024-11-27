import React from 'react'
import { PopoverMenu, PopoverMenuOption } from '../atoms/Popover'

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/DN2ova21vWqCRvPspBXgI1/Design-System?node-id=3200-3749&m=dev',
  },
}

const meta = {
  title: 'Design System/Atoms/PopoverMenu',
  component: PopoverMenuOption,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Component variant used',
    },
    title: {
      description: 'Component title text',
    },
    disabled: {
      description: 'Is the component disabled?',
    },
    active: {
      description: 'Is the component active?',
    },
  },
  parameters: figmaPrimaryDesign,
}

export default meta

export const Menu = {
  render: () => (
    <PopoverMenu>
      <PopoverMenuOption active href="#" variant="primary" title="Profile" />
      <PopoverMenuOption href="#" variant="primary" title="Change password" />
      <PopoverMenuOption disabled href="#" variant="primary" title="Logout" />
    </PopoverMenu>
  ),
}
