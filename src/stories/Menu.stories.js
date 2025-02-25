import React from 'react'
import { Menu, MenuDropdown, MenuLink } from '../atoms/Menu'

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/DN2ova21vWqCRvPspBXgI1/Design-System?node-id=2464-3456&m=dev',
  },
}

const meta = {
  title: 'Design System/Atoms/Menu',
  component: Menu,
  parameters: {
    docs: {
      description: {
        component:
          '<h2>Usage guidelines</h2><p>Menu component allows users to move around the site quickly and efficiently.</p><ul><li>Use concise & descriptive titles in order to ensure simplicity</li><li>Use icons in first-level items only</li></ul>',
      },
    },
    figmaPrimaryDesign,
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      description: 'Component icon used',
    },
    variant: {
      description: 'Component variant used',
    },
    title: {
      description: 'Component title text',
    },
    isActive: {
      description: 'Is the element active?',
    },
    href: {
      description: 'link to the page',
    },
    isOpen: {
      description: 'Is the dropdown open?',
    },
  },
}

export default meta

export const MenuWithLinks = {
  render: () => (
    <Menu>
      <MenuLink title="Tekken 8" href="some-link" />
      <MenuLink
        title="The Legend of Zelda: Tears of the Kingdom"
        icon="Delete"
        href="some-link"
        isActive
      />
      <MenuLink
        title="Metal Gear Solid 5: Ground Zeroes + The Phantom Pain"
        icon="Show"
        href="some-link"
      />
      <MenuDropdown title="Open" icon="AddCircle" name="menu" isOpen>
        <MenuLink title="Stray" href="some-link" isActive />
        <MenuLink title="Fallout 3" href="some-link" />
      </MenuDropdown>
      <MenuDropdown title="Close" name="menu">
        <MenuLink title="Dark souls" href="some-link" />
        <MenuLink title="Elder ring" href="some-link" />
      </MenuDropdown>
    </Menu>
  ),
}
