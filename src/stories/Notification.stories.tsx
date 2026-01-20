import type { StoryObj } from '@storybook/nextjs'
import React from 'react'
import { Button, IconButton } from '../atoms/Button'
import { CheckableTag, CheckableTagGroup } from '../atoms/CheckableTag'
import { Header } from '../atoms/Header'
import {
  NotificationCenter,
  NotificationHeader,
  NotificationLine,
  NotificationList,
} from '../atoms/Notification'
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
          <NotificationList>
            <NotificationLine
              title="Trophy: Parting on Good Terms"
              description="Good terms? No. I'm here to burn bridges."
              date="Jan 04"
            />
            <NotificationLine
              title="New operating system update"
              description="Enjoy the new UI and performance improvements."
              date="Jan 02"
            />
            <NotificationLine
              title="Trophy: Shell of the Past"
              description="What exactly have we learned?"
              date="Dec 30"
            />
            <NotificationLine
              title="New SHf game patch update"
              description="Fixes a bug when saving the game in certain conditions."
              date="Dec 29"
              isRead={true}
            />
            <NotificationLine
              title="Trophy: On the Way to School"
              description="The little sparrow escapes with its friends, wings flapping nervously..."
              date="Dec 28"
              isRead={true}
            />
          </NotificationList>
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
