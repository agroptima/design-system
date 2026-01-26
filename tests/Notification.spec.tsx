import { render } from '@testing-library/react'
import React from 'react'
import { Button } from '../src/atoms/Button'
import { CheckableTag, CheckableTagGroup } from '../src/atoms/CheckableTag'
import {
  NotificationCenter,
  NotificationHeader,
  NotificationLine,
  NotificationList,
} from '../src/atoms/Notification'

describe('NotificationCenter', () => {
  it('renders with expected content and buttons', () => {
    const { getByText } = render(
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
          <NotificationLine
            title="New SHf game patch update"
            date="Dec 29"
            isRead={true}
          >
            Fixes a bug when saving the game in certain conditions.
          </NotificationLine>
        </NotificationList>
      </NotificationCenter>,
    )
    expect(getByText('All')).toBeInTheDocument()
    expect(getByText('Errors')).toBeInTheDocument()
    expect(getByText('Updates')).toBeInTheDocument()
    expect(getByText(/Mark all as read/i)).toBeInTheDocument()

    expect(getByText('Trophy: Parting on Good Terms')).toHaveClass(
      'notification-line-title',
    )
    expect(getByText('Jan 04')).toHaveClass('notification-line-date')
    expect(
      getByText("Good terms? No. I'm here to burn bridges."),
    ).toBeInTheDocument()
    expect(getByText('New SHf game patch update')).toHaveClass(
      'notification-line-title',
    )
    expect(getByText('Dec 29')).toBeInTheDocument()
    expect(
      getByText('Fixes a bug when saving the game in certain conditions.'),
    ).toBeInTheDocument()
  })
})
