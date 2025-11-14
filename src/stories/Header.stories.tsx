import type { StoryObj } from '@storybook/nextjs'
import React from 'react'
import { Button } from '../atoms/Button'
import { Header, type HeaderProps } from '../atoms/Header/Header'
import { Icon } from '../atoms/Icon'
import { Popover, PopoverMenu, PopoverMenuOption } from '../atoms/Popover'

const meta = {
  title: 'Design System/Atoms/Header',
  component: Header,
  parameters: {
    docs: {
      description: {
        component:
          '<h2>Usage guidelines</h2>' +
          '<p>The <code>Header</code> component is used to provide consistent branding and global navigation across the application.</p>' +
          '<ul>' +
          '  <li>Use it at the top of every page to display the logo, user menu, and language selector</li>' +
          '  <li>Keep the header content minimal and focused on global actions only</li>' +
          '  <li>Position utility items (language selector, user menu) on the right side for better accessibility</li>' +
          '  <li>Maintain consistent height and styling across all pages</li>' +
          '</ul>',
      },
    },
  },
  tags: ['autodocs', 'Layout components'],
  argTypes: {
    children: {
      description: 'Header elements are passed as children',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (props: HeaderProps) => (
    <Header {...props}>
      <h1>Header Title</h1>
      <Icon name="UserMenu" />
      <Popover
        renderButton={({ toggle }) => (
          <Button variant="primary" label="EN" onClick={toggle} />
        )}
      >
        <PopoverMenu>
          <PopoverMenuOption title="ES" />
          <PopoverMenuOption title="EN" />
        </PopoverMenu>
      </Popover>
    </Header>
  ),
}
