import type { StoryObj } from '@storybook/nextjs'
import React from 'react'
import { Button } from '../atoms/Button'
import { Popover, PopoverMenu, PopoverMenuOption } from '../atoms/Popover'
import type { PopoverProps } from '../atoms/Popover/Popover'

const figmaPrimaryDesign = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/DN2ova21vWqCRvPspBXgI1/Design-System?node-id=3200-3749&m=dev',
  },
}

const meta = {
  title: 'Design System/Atoms/Popover',
  component: Popover,
  tags: ['autodocs', 'Action components', 'Navigation components'],
  argTypes: {
    renderButton: {
      description: 'Render prop for the button that triggers the popover',
    },
    position: {
      description: 'Position of the popover',
      control: { type: 'select' },
    },
    top: {
      description: 'Show menu on top of the popover',
      control: { type: 'boolean' },
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

export const MenuWithLinkOptions: Story = {
  render: (props: PopoverProps) => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Popover
        {...props}
        renderButton={({ toggle }) => (
          <Button
            variant="primary-outlined"
            label="Open popover"
            onClick={toggle}
          />
        )}
      >
        <PopoverMenu>
          <PopoverMenuOption
            active
            href="#"
            variant="primary"
            title="Profile"
          />
          <PopoverMenuOption
            href="#"
            variant="primary"
            title="Change password"
          />
          <PopoverMenuOption
            disabled
            href="#"
            variant="primary"
            title="Logout"
          />
        </PopoverMenu>
      </Popover>
    </div>
  ),
} as unknown as Story

export const MenuWithButtonOptions: Story = {
  args: {
    renderButton: ({ toggle }) => (
      <Button
        variant="primary-outlined"
        label="Open popover"
        onClick={toggle}
      />
    ),
    children: (
      <PopoverMenu>
        <PopoverMenuOption
          active
          onClick={() => alert('Profile')}
          variant="primary"
          title="Profile"
        />
        <PopoverMenuOption
          onClick={() => alert('Change password')}
          variant="primary"
          title="Change password"
        />
        <PopoverMenuOption
          disabled
          onClick={() => alert('Logout')}
          variant="primary"
          title="Logout"
        />
      </PopoverMenu>
    ),
  },
}

export const MenuWithIcons: Story = {
  render: (props: PopoverProps) => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Popover
        {...props}
        renderButton={({ toggle }) => (
          <Button
            variant="primary-outlined"
            label="Open popover"
            onClick={toggle}
          />
        )}
      >
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
      </Popover>
    </div>
  ),
} as unknown as Story
