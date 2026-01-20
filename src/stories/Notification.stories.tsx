import type { StoryObj } from '@storybook/nextjs'
import React from 'react'
import { Button, IconButton } from '../atoms/Button'
import { CheckableTag, CheckableTagGroup } from '../atoms/CheckableTag'
import { Header } from '../atoms/Header'
import { NotificationCenter, NotificationHeader } from '../atoms/Notification'
import type { NotificationCenterProps } from '../atoms/Notification/NotificationCenter'

const meta = {
  title: 'Design System/Atoms/Notification',
  component: NotificationCenter,
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
  tags: ['autodocs', 'Feedback components', 'Layout components'],
  argTypes: {
    children: {
      description: 'Header elements are passed as children',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  render: (props: NotificationCenterProps) => (
    <Header {...props}>
      <h1>Header Title</h1>

      <div style={{ display: 'flex', gap: '10px', marginRight: '30px' }}>
        <NotificationCenter {...props}>
          <NotificationHeader title="Notifications">
            <CheckableTagGroup>
              <CheckableTag
                variant="primary"
                label="All"
                aria-label="All notifications"
                onSelect={() => alert('click')}
                isChecked={true}
              />
              <CheckableTag
                variant="primary"
                label="Errors"
                aria-label="Notification errors"
                onSelect={() => alert('click')}
                isChecked={false}
              />
              <CheckableTag
                variant="primary"
                label="Updates"
                aria-label="Notification updates"
                onSelect={() => alert('click')}
                isChecked={false}
              />
            </CheckableTagGroup>
            <Button
              onClick={() => alert('mark all as read')}
              label="Mark all as read"
            />
          </NotificationHeader>
        </NotificationCenter>
        <IconButton
          icon="UserMenu"
          accessibilityLabel="User menu button"
          variant="secondary"
        />
      </div>
    </Header>
  ),
} as unknown as Story
