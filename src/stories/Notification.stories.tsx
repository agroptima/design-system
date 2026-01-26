import type { StoryObj } from '@storybook/nextjs'
import React from 'react'
import { Button, IconButton } from '../atoms/Button'
import { CheckableTag, CheckableTagGroup } from '../atoms/CheckableTag'
import { Header } from '../atoms/Header'
import {
  NotificationCenter,
  NotificationEmptyState,
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
          '<p>The <code>NotificationCenter</code> component is used to show an open/close action, list of notifications and related filters actions to the user.</p>' +
          '<ul>' +
          '  <li>Use it at the header to display the open/close IconButton</li>' +
          '  <li>By default, the <code>NotificationCenter</code> will be aligned to the right of the open/close IconButton</li>' +
          '  <li>Use short, informative, and actionable text. Avoid vague, repetitive, or excessive notifications</li>' +
          '  <li>Distinguish between read and unread messages</li>' +
          '</ul>',
      },
    },
  },
  tags: ['autodocs', 'Feedback components', 'Layout components'],
  argTypes: {
    children: {
      description: 'Header, List and Line components are passed as children',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const NotificationCenterWithNotifications: Story = {
  render: (props: NotificationCenterProps) => (
    <Header {...props}>
      <h1>Header Title</h1>

      <div style={{ display: 'flex', gap: '10px', marginRight: '30px' }}>
        <NotificationCenter>
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
              date="Jan 04"
              onClick={() => alert('Notification clicked')}
            >
              Good terms? No. I&apos;m here to burn bridges.
            </NotificationLine>
            <NotificationLine title="New operating system update" date="Jan 02">
              Enjoy the new UI and performance improvements. <br /> Contact{' '}
              <a href="support@fakemail.com">support@fakemail.com</a> for help.
            </NotificationLine>
            <NotificationLine title="Trophy: Shell of the Past" date="Dec 30">
              What exactly have we learned?
            </NotificationLine>
            <NotificationLine
              title="New SHf game patch update"
              date="Dec 29"
              isRead={true}
            >
              Fixes a bug when saving the game in certain conditions.
            </NotificationLine>
            <NotificationLine
              title="Trophy: On the Way to School"
              date="Dec 28"
              isRead={true}
              onClick={() => alert('Notification clicked')}
            >
              The little sparrow escapes with its friends, wings flapping
              nervously...
            </NotificationLine>
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

export const NotificationCenterEmptyState: Story = {
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
          <NotificationEmptyState title="No new notifications" date="Jan 21" />
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
