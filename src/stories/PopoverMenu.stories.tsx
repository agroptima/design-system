import type { StoryObj } from '@storybook/nextjs'
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
  parameters: {
    docs: {
      description: {
        component:
          '<h2>Usage guidelines</h2>' +
          '<p>A Popover component is a layer that appears above all other content on the page. Only one popover can appear at a time and can contain varying text and interactive elements.</p>' +
          '<ul>' +
          ' <li>Use when you need to display additional details for specific elements on a page.</li>' +
          '</ul>',
      },
    },
    figmaPrimaryDesign,
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Menu: Story = {
  render: () => (
    <PopoverMenu>
      <PopoverMenuOption active href="#" variant="primary" title="Profile" />
      <PopoverMenuOption href="#" variant="primary" title="Change password" />
      <PopoverMenuOption disabled href="#" variant="primary" title="Logout" />
    </PopoverMenu>
  ),
} as unknown as Story

export const MenuWithIcons: Story = {
  render: () => (
    <PopoverMenu>
      <PopoverMenuOption
        active
        href="#"
        variant="primary"
        title="Profile"
        leftIcon="Export"
      />
      <PopoverMenuOption
        href="#"
        variant="primary"
        title="Change password"
        leftIcon="Export"
      />
      <PopoverMenuOption
        disabled
        href="#"
        variant="primary"
        title="Logout"
        leftIcon="Export"
      />
    </PopoverMenu>
  ),
} as unknown as Story
