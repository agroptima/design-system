import type { StoryObj } from '@storybook/nextjs'
import React from 'react'
import { IconButton } from '../atoms/Button'
import { Header, type HeaderProps } from '../atoms/Header'

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
    <div style={{ position: 'absolute', top: 0, left: 0 }}>
      <Header {...props}>
        <h1>Header Title</h1>

        <IconButton
          icon="UserMenu"
          variant="secondary"
          accessibilityLabel="User menu button"
        />
      </Header>
    </div>
  ),
}
