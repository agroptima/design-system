import React from 'react'

import { Menu } from '../atoms/Menu'
import { MenuOption } from '../atoms/MenuOption'

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/DN2ova21vWqCRvPspBXgI1/Design-System?node-id=2464-1494&m=dev',
  },
}

const meta = {
  title: 'Design System/Atoms/Menu',
  component: Menu,
  tags: ['autodocs'],
  argTypes: {
    id: {
      description: 'Id for aria purposes',
    },
    icon: {
      description: 'Component icon used',
    },
    variant: {
      description: 'Component variant used',
    },
    title: {
      description: 'Component title text',
    },
    description: {
      description: 'Component description text',
    },
    isDisabled: {
      description: 'Is the component disabled?',
    },
    onClick: {
      description: 'Event triggered when the component is clicked',
    },
  },
  parameters: figmaPrimaryDesign,
}

export default meta

export const FirstLevelMenu = {
  render: () => (
    <Menu>
      <MenuOption title="Tekken 8" icon="Edit" onClick={() => alert('click')} />
      <MenuOption
        title="The Legend of Zelda: Tears of the Kingdom"
        icon="Delete"
        onClick={() => alert('click')}
      />
      <MenuOption
        title="Metal Gear Solid 5: Ground Zeroes + The Phantom Pain"
        icon="Show"
        onClick={() => alert('click')}
      />
      <MenuOption title="Stray" icon="Info" onClick={() => alert('click')} />
    </Menu>
  ),
}

export const MenuWithDropdown = {
  render: () => (
    <Menu>
      <MenuOption title="Tekken 8" icon="Edit">
        <Menu isDropdown>
          <MenuOption title="Walkthrough" />
          <MenuOption title="Characters" />
          <MenuOption title="Story" />
        </Menu>
      </MenuOption>
      <MenuOption
        title="The Legend of Zelda: Tears of the Kingdom"
        icon="Delete"
        onClick={() => alert('click')}
      />
      <MenuOption
        title="Metal Gear Solid 5: Ground Zeroes + The Phantom Pain"
        icon="Show"
      >
        <Menu isDropdown>
          <MenuOption title="Walkthrough" />
          <MenuOption title="Characters" />
          <MenuOption title="Story" />
        </Menu>
      </MenuOption>
      <MenuOption title="Stray" icon="Info" onClick={() => alert('click')} />
    </Menu>
  ),
}
